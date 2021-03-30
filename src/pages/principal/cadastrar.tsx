import Sidebar from '../../components/Sidebar'
import Header from '../../components/Header'
import Content from '../../components/Content'
import { useState } from 'react'

import styles from '../../styles/pages/Cadastrar.module.css'

export default function Cadastrar() {
  const [cpfValue, setCpf] = useState('')
  const [rgValue, setRG] = useState('')
  const [cepValue, setCep] = useState('')

  function maskCpf(value: string) {
    setCpf(value
      .replace(/\D/g, '')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})/, '$1-$2'))
  }

  function maskRG(value: string) {
    setRG(value
      .replace(/\D/g, '')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2'))
  }

  function maskCEP(value: string) {
    setCep(value
      .replace(/\D/g, '')
      .replace(/(\d{5})(\d)/, '$1-$2'))
  }

  return (
    <div>
      <Sidebar />
      <Header />
      <Content>
        <div className={styles.registerContainer}>
          <form>
            <div className={styles.formDivider}>
              <div>
                <label htmlFor="nome">Nome Completo</label>
                <input type="text" name="nome" id="nome" required />
              </div>
            </div>
            <div className={styles.formDivider}>
              <div>
                <label htmlFor="cpf">CPF</label>
                <input type="text" name="cpf" id="cpf" maxLength={14} value={cpfValue} onChange={e => maskCpf(e.target.value)} required />
              </div>
              <div>
                <label htmlFor="rg">RG</label>
                <input type="text" name="rg" id="rg" maxLength={11} value={rgValue} onChange={e => maskRG(e.target.value)} required />
              </div>
            </div>
            <div className={styles.formDivider}>
              <div>
                <label htmlFor="cep">CEP</label>
                <input type="text" name="cep" id="cep" maxLength={9} value={cepValue} onChange={e => maskCEP(e.target.value)} required />
              </div>
              <div>
                <label htmlFor="cidade">Cidade</label>
                <input type="text" name="cidade" id="cidade" required/>
              </div>
            </div>
            <div className={styles.formDivider}>
              <div>
                <label htmlFor="bairro">Bairro</label>
                <input type="text" name="bairro" id="bairro" required/>
              </div>
              <div>
                <label htmlFor="logradouro">Logradouro</label>
                <input type="text" name="logradouro" id="logradouro" required/>
              </div>
            </div>
            <div className={styles.formDivider}>
              <div>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"/>
              </div>
              <div>
                <label htmlFor="profissao">Profissão</label>
                <input type="text" name="profissao" id="profissao" required/>
              </div>
            </div>
            <button type="submit">Cadastrar</button>
          </form>
        </div>
      </Content>
    </div>
  )
}