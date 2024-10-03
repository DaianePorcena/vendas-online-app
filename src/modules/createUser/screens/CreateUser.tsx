import Button from '../../../shared/components/button/Button';
import Input from '../../../shared/components/input/input';
import { useCreateUser } from '../hooks/useCreateUser';
import { CreateUserContainer } from '../styles/createUser.styles';

const CreateUser = () => {
  const { createUser, loading, disabled, handleOnChangeInput, handleCreateUser } = useCreateUser();
  return (
    <CreateUserContainer>
      <Input
        value={createUser.name}
        onChange={(event) => handleOnChangeInput(event, 'name')}
        margin="0px 0px 16px 0px"
        placeholder="Digite"
        title="Nome completo:"
      />
      <Input
        value={createUser.phone}
        onChange={(event) => handleOnChangeInput(event, 'phone')}
        margin="0px 0px 16px 0px"
        placeholder="Digite"
        type="cel-phone"
        title="Telefone:"
      />
      <Input
        value={createUser.email}
        onChange={(event) => handleOnChangeInput(event, 'email')}
        margin="0px 0px 16px 0px"
        placeholder="Digite"
        title="E-mail:"
      />
      <Input
        value={createUser.cpf}
        onChange={(event) => handleOnChangeInput(event, 'cpf')}
        margin="0px 0px 16px 0px"
        placeholder="Digite"
        type="cpf"
        title="CPF:"
      />
      <Input
        value={createUser.password}
        onChange={(event) => handleOnChangeInput(event, 'password')}
        margin="0px 0px 16px 0px"
        placeholder="Digite"
        title="Senha:"
        secureTextEntry
      />
      <Input
        value={createUser.confirmPassword}
        onChange={(event) => handleOnChangeInput(event, 'confirmPassword')}
        margin="0px 0px 16px 0px"
        placeholder="Digite"
        title="Confirmar senha:"
        secureTextEntry
      />
      <Button
        disabled={disabled}
        onPress={handleCreateUser}
        loading={loading}
        margin="0px 0px 32px 0px"
        title="Cadastrar"
      />
    </CreateUserContainer>
  );
};

export default CreateUser;
