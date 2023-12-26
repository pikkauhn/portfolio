interface Description {
    title: string;
    major: string;
    description: string;
    accomplishments: string[];
}

const EducationDesc = () => {

    const projectList: Description[] = [
        {
            title: "Capella University",
            major: "Software Development",
            description: "During a period of professional transition, I enrolled at Capella University seeking both personal growth and a more defined professional focus. Having achieved success in leadership roles, I initially gravitated towards project management as a career path. However, a required programming course unexpectedly sparked a passion within me. Discovering the creative potential of app development and the ongoing challenges of mastering new programming languages fueled my enthusiasm. While I still value the collaborative aspects of team leadership, my long-term aspirations now center on becoming a lead programmer. The transformative experience at Capella University not only facilitated my skill development but also ignited a profound joy in this new direction.",
            accomplishments: [
                "Graduated Suma Cum Laude with a 4.0 GPA",
                "National Honors Society for Leadership and Success member",
            ]
        }
    ]

    return (

        <div className="pageContent">

            {projectList.map((data) => {
                return (
                    <div key={data.title} className="projectDescriptions">
                        <h2>{data.title}</h2>
                        <h3>Major:</h3>
                        <ul>
                            {data.major}
                        </ul>
                        <h3>My Time:</h3>
                        <ul>
                            {data.description}
                        </ul>
                        <h3>Accomplishments:</h3>
                        <ul>
                            {data.accomplishments.map((benefit: any, index: any) => (
                                <li key={index}>{benefit}</li>
                            ))}
                        </ul>
                        <ul>
                            <h3 className="centerButton"><a href="/transcript.pdf">View Transcript</a></h3>
                        </ul>
                    </div>
                )
            })}
        </div>
    )
}

export default EducationDesc