import { Typography, Box } from '@mui/material';
import './tabelaAndar.css';


const FloorTab = ({ title, items}) => {
    return (
        <Box mb={3} className="colunas">
          <Typography variant="h6" gutterBottom className='tituloTela'>
            {title}
          </Typography>
          {items.map((item) => (
            <Box key={item.img} mb={1} className='caixaTela'>
              <img
                src={`${item.img}?w=248&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
                style={{ width: '80px', height: 'auto' }}
              />
              <Typography variant="subtitle1">{item.title}</Typography>
              <Typography variant="body2" color="textSecondary" style={{fontSize:'20px'}}>
                {item.author}
              </Typography>
            </Box>
          ))}
        </Box>
      );
    };

export default FloorTab