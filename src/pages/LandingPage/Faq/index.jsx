import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function FaqCard() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Como funciona o Nutrafity?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            O Nutrafity é um site que utiliza algoritmos avançados de inteligencia artificial para criar planos alimentares personalizados de acordo com suas metas, preferências e restrições. Além disso, oferecemos acompanhamento de evolução, gráficos de progresso e receitas diárias para garantir sua jornada fitness de sucesso.
          </Typography>
        </AccordionDetails>
      </Accordion>
      
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Como as dietas são personalizadas?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nossos algoritmos consideram uma variedade de fatores, como suas metas de treino, preferências alimentares, restrições dietéticas e informações de saúde. Isso nos permite criar um plano alimentar sob medida para você.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Como o acompanhamento de evolução funciona?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Nossa plataforma registra seus dados de progresso, como peso, medidas corporais e desempenho nos treinos. Essas informações são transformadas em gráficos visuais para que você possa acompanhar seu sucesso de maneira clara e motivadora.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>As receitas são fáceis de seguir?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Absolutamente! As receitas do Nutrafity são selecionadas para se adequar ao seu plano alimentar e são acompanhadas por instruções detalhadas. Preparamos opções deliciosas e simples para tornar sua jornada saudável mais saborosa.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Quais são as opções de pagamento disponíveis?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Oferecemos planos mensais, semestrais e anuais para atender às suas preferências. Aceitamos cartões de crédito e outras formas de pagamento online seguras.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>E se eu tiver mais dúvidas ou precisar de suporte?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Estamos aqui para ajudar! Nosso suporte ao cliente está disponível para responder a quaisquer perguntas que você possa ter. Basta entrar em contato conosco por e-mail ou chat.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}