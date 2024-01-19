import Button from '@mui/material/Button';

function MoreLessButton({isOpen}) {
    return (
        <Button>{isOpen ? "Show Less" : "Show More"}</Button>
    );
}

export default MoreLessButton;