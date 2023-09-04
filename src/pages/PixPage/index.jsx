import React, { useEffect } from "react";
import Header from "../../components/Header";
import axios from 'axios';

const PixPage = () => {
    const createOrder = async () => {
        const token = '0e870f8f-f184-42cf-b1bb-6ceecbe4c78f51e1027b4062b5cd69281ba0b87a1d5e0343-8e4c-4220-9a53-39cac2478302'; // Substitua <token> pelo seu token de autorização
    
        const orderData = {
          reference_id: 'ex-00001',
          customer: {
            name: 'Jose da Silva',
            email: 'email@test.com',
            tax_id: '12345678909',
            phones: [
              {
                country: '55',
                area: '11',
                number: '999999999',
                type: 'MOBILE',
              },
            ],
          },
          items: [
            {
              reference_id: 'referencia do item',
              name: 'nome do item',
              quantity: 1,
              unit_amount: 500,
            },
          ],
          shipping: {
            address: {
              street: 'Avenida Brigadeiro Faria Lima',
              number: '1384',
              complement: 'apto 12',
              locality: 'Pinheiros',
              city: 'São Paulo',
              region_code: 'SP',
              country: 'BRA',
              postal_code: '01452002',
            },
          },
          notification_urls: ['https://api-nutrafity.vercel.app/WebHookPagBank'],
        };
    
        try {
          const response = await axios.post('https://sandbox.api.pagseguro.com/orders', orderData, {
            headers: {
              Authorization: `Bearer ${token}`,
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
          });
    
          console.log('Ordem criada com sucesso:', response.data);
          // Você pode lidar com a resposta da API aqui
        } catch (error) {
          console.error('Erro ao criar a ordem:', error);
          // Lidar com erros aqui
        }
      };

      useEffect(()=>{
        createOrder()
      }, [])
    return (
        <>
            <Header/>
        </>
    )
}

export default PixPage