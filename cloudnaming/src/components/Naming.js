import { useState } from 'react';

const Naming = () => {
    const [projName, setProjName] = useState("");
    const [ObjectName, setObjectName] = useState("");
    const [FolderName, setFolderName] = useState("");
    const [isActive, setIsActive] = useState(false);
    const [picked, setPicked] = useState("");
    const [isDisabled, setIsDisabled] = useState(true);
    const envs = ['Dev', 'Test', 'Prod', 'Exp', 'Other'];
    const [envValid, setEnvValid] = useState(false);


    function handleChange(event) {
        setProjName(event.target.value);
    }

    function getName(event) {
        setObjectName("ph-" + getEnv() + "-" + event.target.value.replace(/\s/g, "").toLowerCase());
        setFolderName("ph-" + event.target.value.replace(/\s/g, "").toLowerCase());

        console.log(ObjectName);
        console.log(FolderName);
    }

    function getEnv(event) {
        if (event.target.value === "Dev") {
            return ("d")
        }
        else if (event.target.value === "Test") {
            return ("t")
        }
        else if (event.target.value === "Prod") {
            return ("p")
        }
        else if (event.target.value === "Exp") {
            return ("x")
        }
        else if (event.target.value === "Other") {
            return ("o")
        }
        setEnvValid(event.target.value ? true : false)

    }

    function displayDiv() {
        isActive = !isActive
        document.getElementById('result').style.display = 'block';
    }

    function displayCopied() {
        isActive = !isActive
        document.getElementById('copied').style.display = 'block';
    }

    function copyFolder() {
        var copyText = this.FolderName;
        navigator.clipboard.writeText(copyText);
        displayCopied();
    }

    function displayCopied2() {
        isActive = !isActive
        document.getElementById('copied2').style.display = 'block';
    }

    function copyProj() {
        var copyText = ObjectName;
        navigator.clipboard.writeText(copyText);
        displayCopied2();

    }

   

    function SubmitButton(){
        if (envValid === true && projName){
          return <button type="submit" className="btn btn-primary btn-lg" >Get Name</button>
        } else {
          return <button type="submit" className="btn btn-primary btn-lg" disabled>Get Name</button>
        };
      };
    

    return (
        <div>
            <div className="container" id="app">
                <form onSubmit={getName}>
                    <div className="container">
                        <div className="input-field">
                            <label htmlFor="projName">Enter Project Name (max 25 chars.) <span className="req">*</span></label>
                            <div className="input-row">
                                <input type="text" id="projName" value={projName} onChange={handleChange} maxLength="25"></input>
                            </div>
                        </div>

                        <div className="env-options">
                            <p>Type of environment required <span className="req">*</span></p>
                            <ul>
                                {envs.map(env => (
                                    <label>
                                        <li> <input type="radio" key={env.type} onChange={getEnv}></input>
                                            {env}
                                        </li>
                                    </label>
                                ))}
                            </ul>
                        </div>

                        <SubmitButton/>

                        <div id="result">
                            <div className="alert alert-secondary">
                                Folder name: {FolderName} <span className="copyBtn"><img className="copyimg"
                                    src="../assets/copy-solid.svg"></img></span>
                                <span id="copied" className="copied">Copied!</span>
                                <br></br>
                                Project name: {ObjectName} <span className="copyBtn"><img className="copyimg"
                                    src="../assets/copy-solid.svg"></img></span>
                                <span id="copied2" className="copied" >Copied!</span>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Naming;