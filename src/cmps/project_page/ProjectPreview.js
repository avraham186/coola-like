import { useEffect } from 'react';
import edit from '../../assets/images/icons/edit_pen.png';
import erase from '../../assets/images/icons/erase.png';
export const ProjectPreview = ({ project, tasksProject, deleteProject }) => {
    useEffect(() => {
        debugger
        console.log(project)
    }, [])
    return (
        < tr className="projects-row" >
            <td><img onClick={(e) => { tasksProject(project.id) }} src={edit}></img></td>

            <td>{project.projectName}</td>
            <td>{project.projectStatus}</td>

            <td>
                {project.startDate}-{project.endDate}
            </td>
            <td></td>
            <td> <td>
                <img onClick={deleteProject(project.id)} src={erase} />
            </td></td>
            <td>
                {" "}
                <img
                    style={{ width: "10px" }}
                    src="https://img.icons8.com/external-becris-lineal-becris/64/000000/external-trash-mintab-for-ios-becris-lineal-becris.png"
                />
            </td>
        </tr >)
};