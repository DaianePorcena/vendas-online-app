import Button from '../../../shared/components/button/Button';
import Input from '../../../shared/components/input/input';
import { CreateUserContainer } from '../styles/createUser.styles';

const CreateUser = () => {
  return (
    <CreateUserContainer>
      <Input margin="0px 0px 16px 0px" placeholder="Digite" title="Nome completo:" />
      <Input margin="0px 0px 16px 0px" placeholder="Digite" title="Telefone:" />
      <Input margin="0px 0px 16px 0px" placeholder="Digite" title="E-mail:" />
      <Input margin="0px 0px 16px 0px" placeholder="Digite" title="CPF:" />
      <Input margin="0px 0px 16px 0px" placeholder="Digite" title="Senha:" />
      <Input margin="0px 0px 16px 0px" placeholder="Digite" title="Confirmar senha:" />
      <Button margin="0px 0px 32px 0px" title="Cadastrar" />
    </CreateUserContainer>
  );
};

export default CreateUser;
