import { useState } from "react";
import axios from "axios";

const SignUpClient = () => {
    const [idType, setIdType] = useState("");
    const [idNumber, setIdNumber] = useState();
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [genre, setGenre] = useState("");
    const [city, setCity] = useState("");
    const [address, setAddress] = useState("");
    const [birthDate, setBirthDate] = useState("");
    const [phoneNumber, setPhoneNumber] = useState();
    const [email, setEmail] = useState("");
    const [account, setAccount] = useState();

    const handleCreateUser = () => {
        var today = new Date()
        today = today.getDate() + '/' + (today.getMonth()+1) + '/' + today.getFullYear();

        var birth = new Date(birthDate);
        birth = birth.getDate() + '/' + (birth.getMonth()+1) + '/' + birth.getFullYear();
        
        axios.post(`http://localhost:8080/clientes/save`,
            {
                tipoId: idType,
                numeroId: Number(idNumber),
                tipoIdRep: sessionStorage.getItem("tipoID"),
                numeroIdRep: Number(sessionStorage.getItem("numeroID")),
                nombreCompleto: name,
                apellidoCompleto: lastName,
                fechaCreacion: today,
                email: email,
                telefono: Number(phoneNumber),
                ciudad: city,
                genero: genre,
                cuenta: Number(account),
                fNacimiento: birth,
                direccion: address,
            })
            .then(() => {
                alert("Cliente creado con éxito");
                setIdType("");
                setIdNumber();
                setName("");
                setLastName("")
                setGenre("");
                setCity("");
                setAddress("");
                setBirthDate("");
                setPhoneNumber();
                setEmail("");
                setAccount("");
            }).catch((err) => {
                console.log(err)
            })
    };

    return (
        <main className="container flex justify-center mx-auto mt-12">
            <article id="userRegister" className="w-2/5 2xl:w-1/3 absolute rounded-2xl bg-gradient-to-b from-lightGreen to-darkGreen">
                <img src="https://res.cloudinary.com/dn1k0drir/image/upload/v1679111733/NatAmE/Logo_oeniv6.png" alt="Logo de la app" id="appLogo" width="350" height="250"
                    className="mx-auto mt-4" />

                <form action="" id="userRegister-form" className="mt-6">
                    <div className="w-4/5 flex justify-between mx-auto">
                        <div id="form-idType">
                            <label htmlFor="idType"></label>
                            <select name="idType" id="idType" value={idType} className="w-32 lg:w-44 sm:w-44 mb-6 px-3 py-2 rounded-md bg-white shadow-md 
                             font-medium font-title" onChange={(e) => setIdType(e.target.value)} required>
                                <option value="" disabled hidden> Tipo ID </option>
                                <option value="CC"> C.C </option>
                                <option value="CE"> C.E </option>
                            </select>
                        </div>

                        <div id="form-idNumber">
                            <label htmlFor="idNumber"></label>
                            <input type="text" name="idNumber" id="idNumber" placeholder="Número ID" value={idNumber} className="w-32 lg:w-44 sm:w-44 mb-6 px-3 py-2 rounded-md 
                            bg-white shadow-md text-black font-medium font-title placeholder-slate-400" onChange={(e) => setIdNumber(e.target.value)} required />
                        </div>
                    </div>

                    <div className="w-4/5 flex justify-between mx-auto">
                        <div id="form-name">
                            <label htmlFor="name"></label>
                            <input type="text" name="name" id="name" placeholder="Nombre completo" value={name} className="w-32 lg:w-44 sm:w-44 mb-6 px-3 py-2 rounded-md 
                            bg-white shadow-md text-black font-medium font-title placeholder-slate-400" onChange={(e) => setName(e.target.value)} required />
                        </div>

                        <div id="form-lastName">
                            <label htmlFor="lastName"></label>
                            <input type="text" name="lastName" id="lastName" placeholder="Apellido completo" value={lastName} className="w-32 lg:w-44 sm:w-44 mb-6 px-3 py-2 
                            rounded-md bg-white shadow-md text-black font-medium font-title placeholder-slate-400" onChange={(e) => setLastName(e.target.value)} required />
                        </div>
                    </div>

                    <div className="w-4/5 flex justify-between mx-auto">
                        <div id="form-genre" className="w-full">
                            <fieldset value={genre} className="flex justify-around mb-6 px-3 py-2 rounded-md bg-white shadow-md text-black font-medium font-title 
                            placeholder-slate-400" onChange={(e) => setGenre(e.target.value)} required>
                                <div className="flex">
                                    <label htmlFor="M" className="mr-2"> Hombre </label>
                                    <input type="radio" name="genre" id="male" value="M" />
                                </div>

                                <div className="flex">
                                    <label htmlFor="F" className="mr-2"> Mujer </label>
                                    <input type="radio" name="genre" id="female" value="F" />
                                </div>

                                <div className="flex">
                                    <label htmlFor="other" className="mr-2"> Otro </label>
                                    <input type="radio" name="O" id="other" value="O" />
                                </div>
                            </fieldset>

                        </div>
                    </div>

                    <div className="w-4/5 flex justify-between mx-auto">
                        <div id="form-city">
                            <label htmlFor="city"></label>
                            <input type="text" name="city" id="city" placeholder="Ciudad" value={city} className="w-32 lg:w-44 sm:w-44 mb-6 px-3 py-2 rounded-md bg-white 
                            shadow-md text-black font-medium font-title placeholder-slate-400" onChange={(e) => setCity(e.target.value)} required />
                        </div>

                        <div id="form-address">
                            <label htmlFor="address"></label>
                            <input type="text" name="address" id="address" placeholder="Dirección" value={address} className="w-32 lg:w-44 sm:w-44 mb-6 px-3 py-2 rounded-md 
                            bg-white shadow-md text-black font-medium font-title placeholder-slate-400" onChange={(e) => setAddress(e.target.value)} required />
                        </div>
                    </div>

                    <div className="w-4/5 flex justify-between mx-auto">
                        <div id="form-birthDate" className="flex w-full justify-between mb-6 px-3 py-2 rounded-md bg-white shadow-md text-slate-400 font-medium font-title 
                        placeholder-slate-400">
                            <h1> Fecha de nacimiento </h1>

                            <label htmlFor="birthDate"></label>
                            <input type="date" name="birthDate" id="birthDate" value={birthDate} className="text-black" onChange={(e) => setBirthDate(e.target.value)} required />
                        </div>
                    </div>

                    <div id="form-phoneNumber" className="flex justify-center">
                        <label htmlFor="phoneNumber"></label>
                        <input type="text" name="phoneNumber" id="phoneNumber" placeholder="Número de teléfono" value={phoneNumber} className="w-4/5 mb-6 px-3 py-2 rounded-md 
                        bg-white shadow-md text-black font-medium font-title placeholder-slate-400" onChange={(e) => setPhoneNumber(e.target.value)} required />
                    </div>

                    <div id="form-email" className="flex justify-center">
                        <label htmlFor="email"></label>
                        <input type="email" name="email" id="email" placeholder="Correo electrónico" value={email} className="w-4/5 mb-6 px-3 py-2 rounded-md bg-white 
                        shadow-md text-black font-medium font-title placeholder-slate-400" onChange={(e) => setEmail(e.target.value)} required />
                    </div>

                    <div id="form-account" className="flex justify-center">
                        <label htmlFor="account"></label>
                        <input type="text" name="account" id="account" value={account} placeholder="Numero de cuenta" className="w-4/5 mb-6 px-3 py-2 rounded-md bg-white 
                        shadow-md text-black font-medium font-title placeholder-slate-400" onChange={(e) => setAccount(e.target.value)} required />
                    </div>

                    <section className="flex justify-center pb-6 mt-8">
                        <input type="button" id="button-signUp" value="Crear cuenta" onClick={handleCreateUser}
                            className={`flex justify-center w-1/3 px-5 py-3 border-white border-x-2 border-y-2 rounded-lg bg-white shadow-lg text-darkGreen text-sm font-semibold 
                        font-title hover:cursor-pointer hover:bg-transparent hover:text-white transition-colors`} />
                    </section>
                </form>
            </article>
        </main>
    )
}

export default SignUpClient