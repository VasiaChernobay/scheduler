import {Component,Fragment} from "react";
import { Container} from "react-bootstrap";
import './scheduler.css'
import AddIcon from '@material-ui/icons/Add';
import {Button, Fab, makeStyles, Paper, TextField} from "@material-ui/core";
import * as ReactDOM from "react-dom";


class Scheduler extends Component {
    constructor(props) {
        super(props);

    }

    render() {


        return <Container>
            <Table/>
        </Container>
    }
}
function Table(){
    return <div className={"table-responsive"}>
        <table className={"table table-bordered text-center"}>
            <TheadTable/>
            <TbodyTable/>
        </table>
    </div>
}
function TheadTable(){
    return <Fragment>
        <thead>

        <tr className={"bg-light-gray"}>
            <th className={"text-uppercase"}>Locations</th>

            <th className={"text-uppercase"}>10:00am</th>
            <th className={"text-uppercase"}>11:00am</th>
            <th className={"text-uppercase"}>12:00am</th>
            <th className={"text-uppercase"}>01:00pm</th>
            <th className={"text-uppercase"}>02:00pm</th>
            <th className={"text-uppercase"}>03:00pm</th>
            <th className={"text-uppercase"}>04:00pm</th>
            <th className={"text-uppercase"}>05:00pm</th>
            <th className={"text-uppercase"}>06:00pm</th>
            <th className={"text-uppercase"}>07:00pm</th>
            <th className={"text-uppercase"}>08:00pm</th>
        </tr>
        </thead>
    </Fragment>
}
function TbodyTable(){
    return <Fragment>
        <tbody>
        <tr>
            <td className={"align-middle"}>
                Gym
            </td>
            <td className={"bg-light-gray"}></td>
            <td className={"bg-light-gray"}></td>
            <td className={"bg-light-gray"}></td>
            <td className={"bg-light-gray"}></td>
            <td className={"bg-light-gray"}></td>
            <td className={"bg-light-gray"}></td>
            <td className={"bg-light-gray"}></td>
            <td className={"bg-light-gray"}></td>
            <td className={"bg-light-gray"}></td>
            <td className={"bg-light-gray"}></td>
            <td className={"bg-light-gray"}></td>

        </tr>
        <tr>
            <td className={"align-middle"}>Jobs</td>


            <td className={"bg-light-gray"}></td>
            <td className={"bg-light-gray"}></td>
            <td className={"bg-light-gray"}></td>
            <td className={"bg-light-gray"}></td>
            <td className={"bg-light-gray"}></td>
            <td className={"bg-light-gray"}></td>
            <td className={"bg-light-gray"}></td>
            <td className={"bg-light-gray"}></td>
            <td className={"bg-light-gray"}></td>
            <td className={"bg-light-gray"}></td>
            <td className={"bg-light-gray"}></td>

        </tr>
        <tr>
            <td className={"align-middle"}>Shop</td>
            <td className={"bg-light-gray"}></td>
            <td className={"bg-light-gray"}></td>
            <td className={"bg-light-gray"}></td>
            <td className={"bg-light-gray"}></td>
            <td className={"bg-light-gray"}></td>
            <td className={"bg-light-gray"}></td>
            <td className={"bg-light-gray"}></td>
            <td className={"bg-light-gray"}></td>
            <td className={"bg-light-gray"}></td>
            <td className={"bg-light-gray"}></td>
            <td className={"bg-light-gray"}></td>
        </tr>


        </tbody>
    </Fragment>
}
class Appointment extends Component{
    constructor(props) {
        super(props);

    }
    render(){
        return <Fragment>
            <span className={"bg-yellow padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13"}>{this.props.target}</span>
            <div className={"margin-10px-top font-size14"}>{this.props.time}</div>
            <div className={"font-size13 text-light-gray"}>{this.props.name}</div>

        </Fragment>
    }
}



export  default Scheduler
