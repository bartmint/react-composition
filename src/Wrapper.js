//composition let us create more generic components, generic components dont know what their children are
//it also help with Prop drilling -> its a term for passing data trought server nested components to destination component
//as a result, all these components are rendered anew
//there is special attribute called "children" which render all components inside tags
//we can also specialize component name


const Wrapper = (props) => {
  return <div>
    <div>
      {props.children}
    </div>
  </div>
}


export default Wrapper;