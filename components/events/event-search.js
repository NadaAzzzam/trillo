import { useRef } from "react";
import { Button } from "../ui/button";
import classes from "./event-search.module.scss";

export default function EventSearch(props) {
    const months=[
        {id:1,name:'January'},
        {id:2,name:'February'},
        {id:3,name:'March'},
        {id:4,name:'April'},
        {id:5,name:'May'},
        {id:6,name:'June'},
        {id:7,name:'July'},
        {id:8,name:'August'},
        {id:9,name:'Septemper'},
        {id:10,name:'October'},
        {id:11,name:'November'},
        {id:12,name:'December'},
    ]

    const yearInputRefs =useRef()
    const monthInputRefs =useRef()

    const submitHandler=(event)=>{
        event.preventDefault()
        const selectYear = yearInputRefs.current.value
        const selectMonth = monthInputRefs.current.value
console.log(selectYear);
console.log(selectMonth);
        props.onSearch(selectYear,selectMonth)

    }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.controls}>
        <div className={classes.control}>
          <label htmlFor="year"></label>
          <select id="year" ref={yearInputRefs}>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>
        <div className={classes.control}>
          <label htmlFor="month"></label>
          <select id="month" ref={monthInputRefs}>
              {months.map(e=><option key={e.id} value={e.id}>{e.name}</option>)}
            
          </select>
        </div>
      </div>
      <Button >
        Feild Events
      </Button>
    </form>
  );
}
