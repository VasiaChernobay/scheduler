import {Component,Fragment} from "react";
import { Container} from "react-bootstrap";
import './scheduler.css';
import AddIcon from "@material-ui/icons/Add"
import {Button, Fab, makeStyles, Paper, TextField} from "@material-ui/core";
import * as ReactDOM from "react-dom";


    class Scheduler extends Component {
     constructor(props) {
         super(props);
         this.onHandleClick=this.onHandleClick.bind(this)
     }
    onHandleClick(){
         return ReactDOM.render(<MenuAddedAppointment/>,document.getElementById("1"));
    }
     render() {


         return <Container>
             <Table/>
             <Fab color="primary" aria-label="add" onClick={this.onHandleClick}>
                 <AddIcon/>
             </Fab>
         </Container>
     }
 }
const Table=()=>{
    return <div className={"table-responsive"}>
        <table className={"table table-bordered text-center"}>
              <TheadTable/>
             <TbodyTable/>
        </table>
    </div>
}
const TheadTable=()=>{
    return <Fragment>
        <thead>
        {/*<tr className={"bg-light-gray"}>*/}
        {/*    <th className={"text-uppercase"}>Time</th>*/}
        {/*    <th className={"text-uppercase"}>Monday</th>*/}
        {/*    <th className={"text-uppercase"}>Tuesday</th>*/}
        {/*    <th className={"text-uppercase"}>Wednesday</th>*/}
        {/*    <th className={"text-uppercase"}>Thursday</th>*/}
        {/*    <th className={"text-uppercase"}>Friday</th>*/}
        {/*    <th className={"text-uppercase"}>Saturday</th>*/}
        {/*</tr>*/}
        <tr className={"bg-light-gray"}>
            <th className={"text-uppercase"}>Time</th>
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
const TbodyTable=()=>{
    return <Fragment>
        <tbody>
        <tr>
            <td className={"align-middle"}>
               Mon
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
            <td className={"align-middle"}>Tue</td>

           
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
            <td className={"align-middle"}>Wed</td>
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
            <td className={"align-middle"}>Thu</td>
            <td className={"bg-light-gray"}>
                <Appointment name={"vasia"} target={"Go to gym" } time={"10:00-11:00"}/>
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

        </tr>
        <tr><td className={"align-middle"}>Fri</td>
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
        <tr><td className={"align-middle"}>Sat</td>
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
        <tr><td className={"align-middle"}>Sud</td>
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

export class MenuAddedAppointment extends  Component{
     
    constructor(props) {
        super(props);
    }
    
    render() {

        return <Paper elevation={3} style={{height:"500px",width:"400px"}}>
            <form noValidate>
                <TextField
                    id="date"
                    label="Start Target"
                    type="date"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </form>
            <form>
                <TextField id="date" label={"End Target"} type={"date"} InputLabelProps={{
                    shrink: true,
                }}/>
                <TextField id="outlined-basic" label="Target" variant="outlined" />
                <Button variant="contained" color="primary">
                    Create
                </Button>
            </form>
        </Paper>
    }
}

export default Scheduler