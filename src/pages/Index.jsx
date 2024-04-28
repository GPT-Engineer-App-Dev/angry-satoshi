import React, { useState } from 'react';
import { Box, Heading, Input, Button, Checkbox, Text, VStack, HStack, StackDivider, Spacer, IconButton } from "@chakra-ui/react";
import { FaPlus, FaTrash } from "react-icons/fa";

const Index = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue) return;
    setTodos([...todos, { text: inputValue, completed: false }]);
    setInputValue('');
  };

  const toggleComplete = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const handleDelete = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <Box maxWidth="480px" mx="auto" mt={10}>
      <Heading mb={5}>Todo List</Heading>
      <form onSubmit={handleSubmit}>
        <HStack mb={5}>
          <Input 
            value={inputValue}
            variant="filled"
            placeholder="Add a new todo..."
            onChange={(e) => setInputValue(e.target.value)}
          />
          <IconButton colorScheme="blue" type="submit" icon={<FaPlus />} />
        </HStack>
      </form>
      <VStack
        divider={<StackDivider />}
        borderColor="gray.100"
        borderWidth="2px"
        p={5}
        borderRadius="lg"
        w="100%"
        maxW={{ base: '90vw', sm: '80vw', lg: '50vw', xl: '30vw' }}
        alignItems="stretch"
      >
        {todos.map((todo, index) => (
          <HStack key={index}>
            <Checkbox isChecked={todo.completed} onChange={() => toggleComplete(index)}/>
            <Text>{todo.text}</Text>
            <Spacer />
            <IconButton icon={<FaTrash />} onClick={() => handleDelete(index)}/>
          </HStack>
        ))}
      </VStack>
    </Box>
  );
};

export default Index;