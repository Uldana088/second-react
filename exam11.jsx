import { useState } from 'react';

function App() {
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState('');
  const [history, setHistory] = useState([]);

  const handleSend = async () => {
    if (!question.trim()) return;

    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyAo_H2fkN00fjm-sQkU2t2EdNDeSlx9Zeg`;

    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: question }] }],
        }),
      });

      const data = await res.json();
      const answer = data?.candidates?.[0]?.content?.parts?.[0]?.text || ' answer not found ';

      setResponse(answer);
      setHistory((prev) => [...prev, question]);
      setQuestion('');
    } catch (error) {
      setResponse('Error ckeck your api key');
    }
  };

  return (
    <div className="min-h-screen bg-[#fdf8f6] text-gray-800 p-6 font-sans">
      <div className="max-w-2xl mx-auto space-y-6">
        <header className="text-center">
          <h1 className="text-3xl font-bold text-[#7b1e3a] tracking-wide uppercase">gemini</h1>
        </header>

        <div className="flex gap-3">
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="enter your question"
            className="flex-1 p-3 rounded-sm border border-[#a74964] focus:outline-none focus:ring-2 focus:ring-[#a74964] bg-white shadow-sm"
          />

          <button
            onClick={handleSend}
            className="bg-[#a74964] text-white px-5 py-2 rounded-sm hover:bg-[#8e2f4d] transition "
          >
            send
          </button>
        </div>

        {response && (
          <div className="bg-white border border-[#e2cfd2] rounded-sm p-4 ">
            <h2 className="text-lg font-semibold text-[#7b1e3a] mb-2">answers:</h2>
            <p className="whitespace-pre-line text-gray-700">{response}</p>
          </div>
        )}

        {history.length > 0 && (
          <div className="bg-white border border-[#e2cfd2] rounded-sm p-4 ">
            <h2 className="text-lg font-semibold text-[#7b1e3a] mb-2">history answers:</h2>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              {history.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
