import "./Container.css";

function Container({children, centered}) {
    return (
        <div class={centered ? "containerc" : "container"}>
            {children}
        </div>
    );
}

export default Container;