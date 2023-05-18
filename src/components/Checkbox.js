import React from "react";
import { ChakraProvider, Tbody, Box, Table, TableCaption, Thead, Tr, Th, Td } from '@chakra-ui/react';
import {BiTrash} from "react-icons/bi";
import "./style.css"

const Checkbox = ({onClick,onClickDelete}) => {
  
  return (
    <div className="main">
      <ChakraProvider>

        <div>
          <Box>
            <Table variant="striped">

              <TableCaption></TableCaption>

              <div>
                <Thead>
                  <div className="titleCabecalho">

                    <div>
                      <Tr className="descricaoCabecalho">
                        <Th>Código</Th>
                        <Th>Nome</Th>
                        <Th>UF</Th>
                      </Tr>
                    </div>
                  </div>
                </Thead>
              </div>

              <div className="main_descricao">
                <Tbody>
                  <div className="descricao">
                    <Tr>
                      <Td>1</Td>
                      <Td>BezMeneses</Td>
                      <Td>CE</Td>
                      <input className='input' type="checkbox" onClick={onClick}/>
                    </Tr>

                    <Tr>
                      <Td>2</Td>
                      <Td>Abolição</Td>
                      <Td>CE</Td>
                      <input className='input' type="checkbox" onClick={onClick} />
                    </Tr>

                    <Tr>
                      <Td>3</Td>
                      <Td>BrStudart</Td>
                      <Td>CE</Td>
                      <input className='input' type="checkbox" onClick={onClick}/>
                    </Tr>

                    <Tr>
                      <Td>4</Td>
                      <Td>Aguambi</Td>
                      <Td>CE</Td>
                      <input className='input' type="checkbox" />
                    </Tr>
                  </div>

                </Tbody>
              </div>

            </Table>
          </Box>
        </div>


        <div className="selecionados">
          <div>
            <h1 className="title_selecionados">Selecionados</h1>

            <Box>
              <Table>
                <Tbody>
                  <Tr>
                    <Td>2</Td>
                    <Td>Abolição</Td>
                    <Td>CE</Td>
                    <button type="button" className="delete_button" onClick={onClickDelete}>
                      <BiTrash/>
                    </button>
                  </Tr>
                  <Tr>
                    <Td>4</Td>
                    <Td>Aguambi</Td>
                    <Td>CE</Td>
                    <button type="button" className="delete_button" onClick={onClickDelete}>
                      <BiTrash/>
                    </button>
                  </Tr>
                  <Tr>
                    <Td>1</Td>
                    <Td>BezMeneses</Td>
                    <Td>CE</Td>
                    <button type="button" className="delete_button" onClick={onClickDelete}>
                      <BiTrash/>
                    </button>
                  </Tr>
                </Tbody>
              </Table>

            </Box>

          </div>

        </div>



      </ChakraProvider>


    </div>
  )
}

export default Checkbox;