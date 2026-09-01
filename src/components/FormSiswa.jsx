import { useState } from "react";

function FormSiswa({ tambahSiswa }) {
  const [name, setName] = useState("");
  const [jurusan, setJurusan] = useState("Junior Web Programmer");
  const [usia, setUsia] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validasi dan pemanggilan tambahSiswa HARUS di dalam handleSubmit
    if (!name.trim() || !usia) {
      alert("Nama dan usia tidak boleh kosong");
      return;
    }

    if (typeof tambahSiswa === "function") {
      tambahSiswa({
        id: Date.now(),
        name: name.trim(),
        jurusan: jurusan,
        usia: Number(usia),
      });
    }

    // Reset form
    setName("");
    setJurusan("Junior Web Programmer");
    setUsia("");
  };

  // Blok return HARUS di dalam fungsi FormSiswa
  return (
    <form className="form-card" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Nama Lengkap</label>
        <input
          type="text"
          id="name"
          placeholder="Nama Lengkap"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="jurusan">Jurusan</label>
        <input
          type="text"
          id="jurusan"
          placeholder="Jurusan"
          value={jurusan}
          onChange={(e) => setJurusan(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="usia">Usia</label>
        <input
          type="number"
          id="usia"
          placeholder="Usia anda"
          value={usia}
          onChange={(e) => setUsia(e.target.value)}
        />
      </div>

      <button type="submit" className="btn-submit">
        Submit
      </button>
    </form>
  );
}

export default FormSiswa;
