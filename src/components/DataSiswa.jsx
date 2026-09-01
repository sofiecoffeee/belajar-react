function DataSiswa({ name, usia, jurusan }) {
  // props : object yang berisi data yang dikirim dari komponen induk (App.jsx) ke komponen anak (DataSiswa.jsx)
  // cara panggilnya : props.namaProperty

  return (
    <div>
      <p>
        <strong>Nama:</strong> {name}
      </p>

      <p>
        <strong>Usia:</strong> {usia}
      </p>
      <p>
        <strong>Jurusan:</strong> {jurusan}
      </p>
    </div>
  );
}

export default DataSiswa;
