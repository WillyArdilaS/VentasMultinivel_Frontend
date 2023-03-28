import LateralMenu from "../components/general/LateralMenu";
import SelectRV  from "../components/salesRepresentative_user/SelectRV"

const ChangeRV = ({setUser, gradient, color}) => {
  return (
    <>
        <div className="relative h-screen">
            <LateralMenu setUser={setUser} gradient={gradient} color={color}/>  
            
            <div className="w-3/4 fixed right-32 h-full overflow-y-auto">
                <SelectRV/>
            </div> 
        </div>    
        </>
  )
}

export default ChangeRV