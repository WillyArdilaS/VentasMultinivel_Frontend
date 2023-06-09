import LateralMenu from "../components/general/LateralMenu";
import SignUpClient from "../components/client_user/SignUpClient"

const SignUpC = ({setIdNumber, gradient, color}) => {
  return (
    <>
        <div className="relative h-screen">
            <LateralMenu setIdNumber={setIdNumber} gradient={gradient} color={color}/>  
            
            <div className="w-10/12 fixed right-0 h-full overflow-y-auto">
              <SignUpClient/>
            </div>
        </div>    
        </>
  )
}

export default SignUpC