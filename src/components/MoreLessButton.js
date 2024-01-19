import Button from '@mui/material/Button';

function MoreLessButton({isOpen}) {
    return (
        <Button>
            <div style={{color: 'white', fontWeight: 'bold'}}>
                {isOpen ? "Show Less" : "Show More"}
            </div>
        </Button>
    );
}

export default MoreLessButton;