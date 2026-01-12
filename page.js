'use client';
import { useState } from 'react';

export default function Home() {
  const [selectedBook, setSelectedBook] = useState(null);

  const books = [
    {
      id: 1,
      title: "Таърихи Тоҷикон",
      author: "Бобоҷон Ғафуров",
      content: "Дар ин ҷо матни китоби 'Таърихи Тоҷикон' хоҳад буд...",
      emoji: "📚",
      color: "bg-blue-100",
      btnColor: "bg-blue-600",
    },
    {
      id: 2,
      title: "Намунаи адабиёти тоҷик",
      author: "Садриддин Айнӣ",
      content: "Ин асари Садриддин Айнӣ соли 1926 навишта шудааст...",
      emoji: "📖",
      color: "bg-green-100",
      btnColor: "bg-green-600",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 p-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-black text-slate-900 mb-10">КИТОБХОНА.TJ</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {books.map((book) => (
            <div key={book.id} className="bg-white p-6 rounded-[2.5rem] shadow-xl border border-white">
              <div className={`${book.color} w-full h-40 rounded-[2rem] mb-6 flex items-center justify-center text-5xl`}>
                {book.emoji}
              </div>
              <h2 className="text-2xl font-bold mb-2">{book.title}</h2>
              <p className="text-slate-500 mb-6">{book.author}</p>
              <button 
                onClick={() => setSelectedBook(book)}
                className={`${book.btnColor} w-full text-white py-4 rounded-2xl font-bold`}
              >
                Хондан
              </button>
            </div>
          ))}
        </div>

        {selectedBook && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white rounded-[2.5rem] max-w-lg w-full p-8 relative">
              <button onClick={() => setSelectedBook(null)} className="absolute top-4 right-6 text-3xl">×</button>
              <h2 className="text-2xl font-bold mb-4">{selectedBook.title}</h2>
              <p className="text-slate-600 bg-slate-50 p-4 rounded-xl">{selectedBook.content}</p>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}