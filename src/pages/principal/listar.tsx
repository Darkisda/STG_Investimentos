import { FiEdit2, FiTrash2 } from 'react-icons/fi'
import Link from 'next/link'

import Sidebar from '../../components/Sidebar'
import Header from '../../components/Header'
import Content from '../../components/Content'

import styles from '../../styles/pages/Listar.module.css'

export default function Listar() {
  return (
    <div>
      <Sidebar />
      <Header />
      <Content>
        <div className={styles.listContainer}>
          <table>
            <thead>
              <tr>
                <th>Nome Completo</th>
                <th>CPF</th>
                <th>Cidade</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Luan de Souza</td>
                <td>111.111.111-17</td>
                <td>Parelhas</td>
                <td>
                  <Link href="/"><FiEdit2 /></Link> 
                  <Link href="/"><FiTrash2 /></Link> 
                </td>
              </tr>
              <tr>
                <td>Luan de Souza</td>
                <td>111.111.111-17</td>
                <td>Parelhas</td>
                <td>
                  <Link href="/"><FiEdit2 /></Link> 
                  <Link href="/"><FiTrash2 /></Link> 
                </td>
              </tr>
              <tr>
                <td>Luan de Souza</td>
                <td>111.111.111-17</td>
                <td>Parelhas</td>
                <td>
                  <Link href="/"><FiEdit2 /></Link> 
                  <Link href="/"><FiTrash2 /></Link> 
                </td>
              </tr>
              <tr>
                <td>Luan de Souza</td>
                <td>111.111.111-17</td>
                <td>Parelhas</td>
                <td>
                  <Link href="/"><FiEdit2 /></Link> 
                  <Link href="/"><FiTrash2 /></Link> 
                </td>
              </tr>
              <tr>
                <td>Luan de Souza</td>
                <td>111.111.111-17</td>
                <td>Parelhas</td>
                <td>
                  <Link href="/"><FiEdit2 /></Link> 
                  <Link href="/"><FiTrash2 /></Link> 
                </td>
              </tr>
              <tr>
                <td>Luan de Souza</td>
                <td>111.111.111-17</td>
                <td>Parelhas</td>
                <td>
                  <Link href="/"><FiEdit2 /></Link> 
                  <Link href="/"><FiTrash2 /></Link> 
                </td>
              </tr>
              <tr>
                <td>Luan de Souza</td>
                <td>111.111.111-17</td>
                <td>Parelhas</td>
                <td>
                  <Link href="/"><FiEdit2 /></Link> 
                  <Link href="/"><FiTrash2 /></Link> 
                </td>
              </tr>
              <tr>
                <td>Luan de Souza</td>
                <td>111.111.111-17</td>
                <td>Parelhas</td>
                <td>
                  <Link href="/"><FiEdit2 /></Link> 
                  <Link href="/"><FiTrash2 /></Link> 
                </td>
              </tr>
              <tr>
                <td>Luan de Souza</td>
                <td>111.111.111-17</td>
                <td>Parelhas</td>
                <td>
                  <Link href="/"><FiEdit2 /></Link> 
                  <Link href="/"><FiTrash2 /></Link> 
                </td>
              </tr>
              <tr>
                <td>Luan de Souza</td>
                <td>111.111.111-17</td>
                <td>Parelhas</td>
                <td>
                  <Link href="/"><FiEdit2 /></Link> 
                  <Link href="/"><FiTrash2 /></Link> 
                </td>
              </tr>
              <tr>
                <td>Luan de Souza</td>
                <td>111.111.111-17</td>
                <td>Parelhas</td>
                <td>
                  <Link href="/"><FiEdit2 /></Link> 
                  <Link href="/"><FiTrash2 /></Link> 
                </td>
              </tr>
              <tr>
                <td>Luan de Souza</td>
                <td>111.111.111-17</td>
                <td>Parelhas</td>
                <td>
                  <Link href="/"><FiEdit2 /></Link> 
                  <Link href="/"><FiTrash2 /></Link> 
                </td>
              </tr>
              <tr>
                <td>Luan de Souza</td>
                <td>111.111.111-17</td>
                <td>Parelhas</td>
                <td>
                  <Link href="/"><FiEdit2 /></Link> 
                  <Link href="/"><FiTrash2 /></Link> 
                </td>
              </tr>

              <tr>
                <td>Luan de Souza</td>
                <td>111.111.111-17</td>
                <td>Parelhas</td>
                <td>
                  <Link href="/"><FiEdit2 /></Link> 
                  <Link href="/"><FiTrash2 /></Link> 
                </td>
              </tr>

              <tr>
                <td>Luan de Souza</td>
                <td>111.111.111-17</td>
                <td>Parelhas</td>
                <td>
                  <Link href="/"><FiEdit2 /></Link> 
                  <Link href="/"><FiTrash2 /></Link> 
                </td>
              </tr>

              <tr>
                <td>Luan de Souza</td>
                <td>111.111.111-17</td>
                <td>Parelhas</td>
                <td>
                  <Link href="/"><FiEdit2 /></Link> 
                  <Link href="/"><FiTrash2 /></Link> 
                </td>
              </tr>

              <tr>
                <td>Luan de Souza</td>
                <td>111.111.111-17</td>
                <td>Parelhas</td>
                <td>
                  <Link href="/"><FiEdit2 /></Link> 
                  <Link href="/"><FiTrash2 /></Link> 
                </td>
              </tr>

              <tr>
                <td>Luan de Souza</td>
                <td>111.111.111-17</td>
                <td>Parelhas</td>
                <td>
                  <Link href="/"><FiEdit2 /></Link> 
                  <Link href="/"><FiTrash2 /></Link> 
                </td>
              </tr>
              
            </tbody>
          </table>
        </div>
      </Content>
    </div>
  )
}