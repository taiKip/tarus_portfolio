import React from 'react'
import classes from './Skills.module.css'

const Skills = () => {
    const comfort = ["TypeScript/Javascript", "React Js/React Ts", "Json", "Git", "SQL", "API's","Aws S3","Firebase"]
    const experience =["Node Js","PostgreSQL"]
    return (
        <div className={classes["skills-set"]}>
            <div>
                <h4>Day to Day Comfort</h4>
                {comfort.map(item => <li key={item}>{item}</li>)}
            </div>
            <div>
                <h4>Limited Experience But In The Pipeline</h4>
                {experience.map(item => <li key={item}>{item}</li>)}
            </div>
        </div>
    )
}

export default Skills
