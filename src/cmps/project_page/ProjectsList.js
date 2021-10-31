import React, {useContext, useEffect, useState} from 'react';
import projectsDAL from "../../adapters/TMS/projectsDAL";
import MaterialTable from "material-table";
import StoreContext from "../../contexts/storeContext";
import {loadProjects} from "../../store/projects";


const ProjectsList = (props) => {

    const deleteProject = async (id) => await projectsDAL.deleteProject(id);

    const [columns, setColumns] = useState([
        {title: 'Project', field: 'projectName'},
        {title: 'Description', field: 'description', initialEditValue: 'initial edit value'},
        {title: 'Start Date', field: 'startDate', type: 'date'},
        {title: 'End Date', field: 'endDate', type: 'date'},
        {
            title: 'Status',
            field: 'projectStatus',
            lookup: {34: 'COMPLETED', 63: 'STARTED'},
        },
    ]);


    const store = useContext(StoreContext);
    const [data, setData] = useState([]);

    useEffect(() => {

        store.subscribe(() => {
            const projectsInStore = store.getState().entities.projects.list;
            // console.log(projectsInStore)
            if(data !== projectsInStore) setData(projectsInStore);
            console.log(data)
        });

        store.dispatch(loadProjects());

    }, [])


    return (
        <div>
            {/*<MaterialTable*/}
            {/*    title="Projects"*/}
            {/*    columns={columns}*/}
            {/*    data={data}*/}
            {/*    editable={{*/}
            {/*        onRowAdd: newData =>*/}
            {/*            new Promise((resolve, reject) => {*/}
            {/*                setTimeout(() => {*/}
            {/*                    setData([...data, newData]);*/}

            {/*                    resolve();*/}
            {/*                }, 1000)*/}
            {/*            }),*/}
            {/*        onRowUpdate: (newData, oldData) =>*/}
            {/*            new Promise((resolve, reject) => {*/}
            {/*                setTimeout(() => {*/}
            {/*                    const dataUpdate = [...data];*/}
            {/*                    const index = oldData.tableData.id;*/}
            {/*                    dataUpdate[index] = newData;*/}
            {/*                    setData([...dataUpdate]);*/}

            {/*                    resolve();*/}
            {/*                }, 1000)*/}
            {/*            }),*/}
            {/*        onRowDelete: oldData =>*/}
            {/*            new Promise((resolve, reject) => {*/}
            {/*                setTimeout(() => {*/}
            {/*                    const dataDelete = [...data];*/}
            {/*                    const index = oldData.tableData.id;*/}
            {/*                    dataDelete.splice(index, 1);*/}
            {/*                    setData([...dataDelete]);*/}

            {/*                    resolve()*/}
            {/*                }, 1000)*/}
            {/*            }),*/}
            {/*    }}*/}
            {/*/>*/}
        </div>

    )
};

export default ProjectsList;