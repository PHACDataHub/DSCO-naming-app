const Convention = () => {
    return (
        <div>
            <h1>How it Works</h1>
            Rules:
            <ul>
                <li>All lower case</li>
                <li>No dashes in the name of the project</li>
            </ul>
            <p>Expressed as pseudo-regex:</p>
            <ul>
                <li>ph(d|t|p|x|o)-nametextnospaces</li>
                <li>ph = public health</li>
                <li>(d|t|p|x|o) THIS IS ONLY REQUIRED AT PROJECT LEVEL; DEFAULT TO ‘O’ IF ONLY 1 ENV</li>
                <li>d = dev</li>
                <li>t = test</li>
                <li>p = prod</li>
                <li>x = experimental</li>
                <li>o = other</li>
            </ul>
            Examples:
            <ul>
                <li>Folder: ph-fldrprojectconf</li>
                <li>Project: pho-fldrprojectconf</li>
            </ul>
            <ul>
                <li>Folder: ph-diseaseprofiler</li>
                <li>Project: phd-diseaseprofiler</li>
                <li>Project: pht-diseaseprofiler</li>
                <li>Project: php-diseaseprofiler</li>
            </ul>
            <ul>
                <li>Folder: ph-vaccinestudy</li>
                <li>Project: pho-vaccinestudy</li>
            </ul>











            <p>When project names are too long, abbreviate the name of the project down to its initials, example 'php-diseaseprofiler' to 'php-dp'.</p>

            <p>Project names have a 30 - character limit which may mean truncation of the right side if the name is too long.Additional values will be added via metadata (business contact, technical contact, business intake id, etc.)</p>
        </div >
    )
}

export default Convention;