export default async function handler(req,res){
  if(req.method!=='POST') return res.status(405).json({error:'Method not allowed'});
  try{
    const body=typeof req.body==='string'?JSON.parse(req.body):req.body||{};
    const messages=Array.isArray(body.messages)?body.messages:[];
    if(!messages.length)return res.status(400).json({error:'messages required'});
    const key=process.env.OPENAI_API_KEY;
    if(!key)return res.status(503).json({error:'OPENAI_API_KEY not configured'});
    const response=await fetch('https://api.openai.com/v1/responses',{method:'POST',headers:{'Content-Type':'application/json','Authorization':`Bearer ${key}`},body:JSON.stringify({model:process.env.OPENAI_MODEL||'gpt-5.6-luna',input:[{role:'system',content:'You are EduSmart, a friendly Class 12 Commerce tutor. Explain clearly and accurately, prefer exam-ready structure, simple examples, and concise answers. When the student asks about their uploaded notes, say when the answer is based on provided notes only.'},{role:'user',content:messages.map(m=>`${m.role}: ${m.content}`).join('\n\n')}]})});
    const data=await response.json();
    if(!response.ok)return res.status(response.status).json({error:data.error?.message||'AI request failed'});
    const text=data.output_text||data.output?.flatMap(x=>x.content||[]).map(x=>x.text||'').join('')||'No response generated.';
    return res.status(200).json({text});
  }catch(e){return res.status(500).json({error:e.message||'Server error'})}
}
