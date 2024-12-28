import React , { useState }from 'react'

export default function Note() {
    const [note, setNote] = useState('');
    const [error, setError] = useState(false);

    const handleNoteChange = (e) => {
    const value = e.target.value;
    setNote(value);
    setError(value.length < 3);
  };
  return (
    <div className='flex flex-col gap-4 font-barlow'>
        <h2 className="font-bold text-lg text-[20px]">Sipariş Notu</h2>
        <p className='text-[16px] font-barlow text-lightGray'>En az üç karakter girmeniz gerekli</p>
        <textarea
            className="w-full h-[100px] border rounded-md p-2 text-[16px] text-darkGray"
            placeholder="Siparişine eklemek istediğin bir not var mı?"
            value={note}
            onChange={handleNoteChange}
        ></textarea>
        {error && (
            <p className="text-red-600 text-[14px]">
            Notunuz en az 3 karakter uzunluğunda olmalıdır.
            </p>
        )}
    </div>
  )
}
