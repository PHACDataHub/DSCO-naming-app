import { useState } from 'react';
import copyImg from '../assets/copy-solid.svg';

const Naming = () => {
    const [projName, setProjName] = useState("");
    const [ObjectName, setObjectName] = useState("");
    const [FolderName, setFolderName] = useState("");
    const [isActive, setIsActive] = useState(false);
    const [picked, setPicked] = useState("");
    const [isDisabled, setIsDisabled] = useState(true);
    const envs = ['Dev', 'Test', 'Prod', 'Exp', 'Other'];
    const [selectedValue, setSelectedValue] = useState("");
    const [envValid, setEnvValid] = useState(false);


    function handleChange(event) {
        setProjName(event.target.value);
    }

    const handleOptionChange = (event) => {
        if (event.target.value === "Dev") {
            setSelectedValue("d");
        } else if (event.target.value === "Test") {
            setSelectedValue("t");
        } else if (event.target.value === "Prod") {
            setSelectedValue("p");
        } else if (event.target.value === "Exp") {
            setSelectedValue("x");
        } else if (event.target.value === "Other") {
            setSelectedValue("o");
        }
        setEnvValid(event.target.value ? true : false)
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        GetName();
        displayDiv();
    };


    function GetName() {
        setObjectName("ph-" + selectedValue + "-" + projName.replace(/\s/g, "").toLowerCase());
        setFolderName("ph-" + projName.replace(/\s/g, "").toLowerCase());
    }

    function displayDiv() {
        setIsActive(!isActive);
        document.getElementById('result').style.display = 'block';
    }

    function displayCopied() {
        setIsActive(true);
        document.getElementById('copied').style.display = 'block';
        setTimeout(() => document.getElementById('copied').style.display = 'none', 3000);
    }

    function copyFolder() {
        var copyText = FolderName;
        navigator.clipboard.writeText(copyText);
        displayCopied();
    }

    function displayCopied2() {
        setIsActive(!isActive);
        document.getElementById('copied2').style.display = 'block';
        setTimeout(() => document.getElementById('copied2').style.display = 'none', 3000);
    }

    function copyProj() {
        var copyText = ObjectName;
        navigator.clipboard.writeText(copyText);
        displayCopied2();

    }

    function SubmitButton() {
        if (envValid === true && projName) {
            return <button type="submit" className="btn btn-primary btn-lg" >Get Name</button>
        } else {
            return <button type="submit" className="btn btn-primary btn-lg" disabled>Get Name</button>
        };
    };

    return (
        <div>
            <div className="container" id="app">
                <form onSubmit={event => handleSubmit(event)}>
                    <div className="container">
                        <div className="input-field">
                            <label htmlFor="projName">Enter Project Name (max 25 chars.) <span className="req">*</span></label>
                            <div className="input-row">
                                <input type="text" id="projName" value={projName} onChange={event => handleChange(event)} maxLength="25"></input>
                            </div>
                        </div>

                        <div className="env-options">
                            <p>Type of environment required <span className="req">*</span></p>
                            <ul>

                                {envs.map((option) => (
                                    <li>
                                        <label key={option}>
                                            <input
                                                type="radio"
                                                name="options"
                                                value={option}
                                                checked={option.value}
                                                onChange={handleOptionChange}
                                            />
                                            {option}
                                        </label>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <SubmitButton />

                        <div id="result">
                            <div className="alert alert-secondary">
                                Folder name: {FolderName} <span className="copyBtn" onClick={copyFolder}><img className="copyimg"
                                    src={copyImg}></img></span>
                                <span id="copied" className="copied">Copied!</span>
                                <br></br>
                                Project name: {ObjectName} <span className="copyBtn" onClick={copyProj}><img className="copyimg"
                                     src={copyImg}></img></span>
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