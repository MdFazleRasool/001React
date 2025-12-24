export const SimpleComponent = ({x}) =>{
    return (
        <div>
            simpleComponent {x}
        </div>
    );
}


export function ClickImpressionTracker({ children }) {
    const handleUserClick = () => {
        console.log('User Clicked : ', children.type.name);
    }

    return (
        <div onClick={handleUserClick} >

            {children}
        </div>
    );

    
}

export function MouseImpressionTracker({ children }) {
    
    const handleMouseEnter = () => {
        console.log('Mouse Entered : ', children.type.name);

    }

    return (
        <div  onMouseEnter={handleMouseEnter} >

            {children}
        </div>
    );

    
}