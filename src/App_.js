import React, { useState } from "react";
import { format } from "date-fns";
import { id } from "date-fns/locale";
import telkom from "./components/Telkom.png";

function App() {
  const firstTime = format(new Date(), "HH:mm", { locale: id });
  const tanggalNow = format(new Date(), "dd MMMM yyyy", { locale: id });
  const [nama, setNama] = useState("");
  const [instansi, setInstansi] = useState("");
  const [tujuan, setTujuan] = useState("");
  const [desc, setDesc] = useState("");
  const [endT, setEndT] = useState("");
  const kirim = (e) => {
    e.preventDefault();
    window.location.href = `https://api.whatsapp.com/send?phone=6285156834452&text======= *Izin Ke Middleware* ======%0a%0a%0aTanggal : ${tanggalNow}%0aDari Jam : ${firstTime}%0aSampai Jam : ${endT}%0aNama : ${nama}%0ainstansi : ${instansi}%0aTujuan : ${tujuan}%0aKeterangan : ${desc}%0a%0aTerima Kasih`;
  };

  return (
    <div className="min-h-screen bg-slate-300 text-black">
      <form onSubmit={kirim}>
        <div className=" flex flex-col py-4 space-y-4 justify-center items-center">
          <div className=" lg:w-2/3 w-4/5 bg-[rgb(111,29,27)] shadow-[0_25px_20px_-20px_rgba(0,0,0,0.5)] rounded-md">
            <div className="flex flex-row w-full justify-between">
              <img width={100} height={100} src={telkom} alt="logo"></img>
              <div className="m-auto ">
                <span className="text-white">Form Izin Masuk Middleware</span>
              </div>
            </div>
          </div>

          <div
            id="header"
            className="card lg:w-2/3 w-4/5 bg-white shadow-[0_25px_20px_-20px_rgba(0,0,0,0.5)]"
          >
            <div className="card absolute bottom-90 w-full h-5 rounded-b-none bg-[#6f1d1b] shadow-[0_25px_20px_-20px_rgba(0,0,0,0.5)] rounded-md"></div>
            <div className="card-body">
              <h2 className="card-title">Middleware Entry Request</h2>
              <h3 className="text-md">
                All Data Will Be Handled With Procedure{" "}
              </h3>
              <p className="text-sm font-medium text-rose-600">
                *Isi Form Dengan Nyata Tanpa Di Buat-Buat
              </p>
            </div>
          </div>
          <div className="card lg:w-2/3 w-4/5 bg-white shadow-[0_25px_20px_-20px_rgba(0,0,0,0.5)]">
            <div className="card-body">
              <h2 className="card-title">
                <span className="text-rose-600">*</span>Nama Pengaju
              </h2>
              <p className="text-sm">Nama pemohon izin</p>
              <input
                className="bg-transparent  text-black border-black focus:outline-none border-b-2 lg:w-1/3"
                type="text"
                placeholder="Full Name"
                aria-label="Full name"
                required
                value={nama}
                onChange={(e) => setNama(e.target.value)}
              />
            </div>
          </div>
          <div className="card lg:w-2/3 w-4/5 bg-white shadow-[0_25px_20px_-20px_rgba(0,0,0,0.5)]">
            <div className="card-body">
              <h2 className="card-title">
                <span className="text-rose-600">*</span>Instansi
              </h2>
              <input
                className="bg-transparent  text-black border-black focus:outline-none border-b-2 lg:w-1/3"
                type="text"
                placeholder="Telkom"
                aria-label="Full name"
                required
                value={instansi}
                onChange={(e) => setInstansi(e.target.value)}
              />
            </div>
          </div>
          <div className="card lg:w-2/3 w-4/5 bg-white shadow-[0_25px_20px_-20px_rgba(0,0,0,0.5)]">
            <div className="card-body">
              <h2 className="card-title">
                <span className="text-rose-600">*</span>Tujuan
              </h2>
              <p className="text-sm">Tujuan ke Middleware</p>
              <select
                defaultValue={"DEFAULT"}
                className="select w-full max-w-xs rounded-none border-b-2 border-t-0 focus:outline-none border-r-0 border-l-0 border-black divide-y divide-slate-200 bg-transparent"
                onChange={(e) => setTujuan(e.target.value)}
              >
                <option value="DEFAULT" disabled>
                  Berkepentingan untuk...
                </option>
                <option value="Pemasangan Perangkat">
                  Pemasangan Perangkat
                </option>
                <option value="Pengecekan Perangkat">
                  Pengecekan Perangkat
                </option>
                <option value="Perawatan Perangkat">Perawatan Perangkat</option>
                <option value="Pencopotan Perangkat">
                  Pencopotan Perangkat
                </option>
              </select>
            </div>
          </div>
          <div className="card lg:w-2/3 w-4/5 bg-white shadow-[0_25px_20px_-20px_rgba(0,0,0,0.5)]">
            <div className="card-body">
              <h2 className="card-title">
                <span className="text-rose-600">*</span>Keterangan
              </h2>
              <p className="text-sm">Keterangan Dari pemohon</p>
              <input
                className="bg-transparent  text-black border-black focus:outline-none border-b-2 lg:w-2/3"
                type="text"
                placeholder="Alasan / ket"
                aria-label="Full name"
                required
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
              />
            </div>
          </div>
          <div className="card lg:w-2/3 w-4/5 bg-white shadow-[0_25px_20px_-20px_rgba(0,0,0,0.5)]">
            <div className="card-body">
              <h2 className="card-title">
                <span className="text-rose-600">*</span>waktu
              </h2>
              <p className="text-sm pl-1">Pada tanggal {tanggalNow}</p>
              <div className="lg:flex lg:space-y-0 lg:space-x-6 space-y-10">
                <div className="flex-col w-1/2">
                  <p className="text-sm pl-1">Dari Jam</p>
                  <input
                    className="bg-transparent  text-black border-black focus:outline-none border-b-2 w-full"
                    type="time"
                    placeholder="waktu"
                    aria-label="Full name"
                    required
                    readOnly
                    value={firstTime}
                  />
                </div>
                <div className="flex-col w-1/2">
                  <p className="text-sm pl-1">Sampai jam</p>
                  <input
                    className="bg-transparent  text-black border-black focus:outline-none border-b-2 w-full"
                    type="time"
                    id="appt"
                    name="appt"
                    min={firstTime}
                    required
                    onChange={(e) => setEndT(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
          <a
            href="#my-modal-2"
            className="btn lg:w-2/3 w-4/5 bg-[#6f1d1b] text-white border-none hover:bg-slate-400 hover:text-slate-800 hover:outline-3"
          >
            submit
          </a>
          <div className="modal" id="my-modal-2">
            <div className="modal-box bg-slate-100">
              <a
                href="#header"
                className="btn btn-sm btn-circle absolute right-2 top-2"
              >
                ✕
              </a>
              <h3 className="font-bold text-lg">Konfirmasi Pengiriman Data</h3>
              <p className="py-4">
                Data Sudah Di isi Dengan Kondisi Sadar dan jujur
              </p>
              <div className="modal-action">
                <button className="btn lg:w-2/3 w-4/5 bg-[#6f1d1b] text-white border-none hover:bg-slate-400 hover:text-slate-800 hover:outline-3">
                  Kirim
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default App;
