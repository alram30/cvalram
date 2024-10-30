function RowPekerjaan (props:any) {
    return (
      <div className="border-2 border-indigo-500/75 rounded-1g ☐ bg-blue-800 p-2 my-5">
      <div className="container mx-auto ">
      <div className="grid grid-cols-12 gap-1">
      <div className="col-span-12 md:col-span-4 ">{props.Sebagai}</div> 
        <div className="col-span-12 md:col-span-4 ">{props.instansi}</div>
      <div className="col-span-12 md:col-span-4 ">{props.tahun}</div>
      </div>
      </div>
      </div>
      );
  }
  export default function  RiwayatPekerjaan() {
    return (
        <div className="container mx-auto p-2 text-center pt-20">
<h2 className="text-2x1">Riwayat Pekerjaan</h2>
<RowPekerjaan Sebagai="Direktur" instansi="Masoem Group" tahun="2015" />
<RowPekerjaan Sebagai="Direktur" instansi="PT. Mitsuba" tahun="2019" />
<RowPekerjaan Sebagai="Administrasi" instansi="PT. Epson" tahun="2021" />
<RowPekerjaan Sebagai="Manajer Produksi" instansi="PT. Kahatek" tahun="2020" />

</div>
);
}