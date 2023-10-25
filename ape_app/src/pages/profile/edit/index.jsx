/*Edit Profile page*/ 
import ButtonGroup from "../../components/buttonGroup";
import SectionTitles from "../../components/sectionTitles";
import NavBar from "../../navbar/navbar";
import React, {useState} from "react";

const editProfile = () => {
    const [username, setUsername] = useState('');
    const [bio, setBio] = useState('');
    const [interest, setInterest] = useState ('')
    const saveProfile = () => {
        console.log('Guardando Perfil')
        console.log('Usuario: ', username);
        console.log('Bio: ', bio);
        console.log('Intereses: ', interest)
    }

    return(
        <div className="box-border">
            <NavBar/>
            <div className="flex flex-col mx-4 my-4">
                <div>
                    <h1 className="text-[24px] sm:text-[28px] leading-5 font-semibold my-4"> Editar Perfil </h1>
                </div>
                <SectionTitles>Nombre de usuario:</SectionTitles>
                <input
                    className="input-bordered text-[16px] sm:text-[24px] solid border-2 p-3 w-full"
                    type="text"
                    placeholder="Nombre de Usuario (Obligatorio)"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <SectionTitles>Bio:</SectionTitles>
                <textarea
                    className="textarea-bordered border-2 solid p-3 text-[16px] sm:text-[24px]"
                    type="text"
                    placeholder="Bio"
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                />
                <SectionTitles>Intereses: </SectionTitles>
                <input
                    className="input-bordered border-2 solid p-3 w-full text-[16px] sm:text-[24px]"
                    type="text"
                    placeholder="Intereses"
                    value={interest}
                    onChange={(e) => setInterest(e.target.value)}
                />
                <button className="button-blue" onClick={saveProfile}>Guardar</button>
                
            </div>
        </div>
    )
}

export default editProfile;