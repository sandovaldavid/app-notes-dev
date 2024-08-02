import { Delete } from "@mui/icons-material";
import { Button, Card, CardActions, CardContent, CardHeader } from "@mui/material";

export default function Note(props){
    return(
        <Card sx={{ width: 250 }}>
            <CardHeader title={props.title}/>
            <CardContent>{props.content}</CardContent> 
            <CardActions>
                <Button>
                    <Delete>
                    </Delete>
                </Button>
            </CardActions>
        </Card>
    );
}
