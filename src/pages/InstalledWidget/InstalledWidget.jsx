import MobileLayout from "../../component/MobileLayout/MobileLayout";
import KindWidgets from "./component/KindWidgets";


//값을 받을때, Widgets과 종류에 대한 값 두개씩을 줘야함.
//ex) ["기본",[{name: "메일",img:"aa"},{name: "이름이름",img:"aa"},{name: "메일",img:"aa"},{name: "메일",img:"aa"}]]

const Widgets = [{name: "메일",img:"aa"},{name: "이름이름",img:"aa"},{name: "메일",img:"aa"},{name: "메일",img:"aa"}];



const InstalledWidget = () =>{



    return(<>
    <MobileLayout>
        
        <KindWidgets kind ="기본" Widgets={Widgets}/>

    </MobileLayout></>)
}

export default InstalledWidget;