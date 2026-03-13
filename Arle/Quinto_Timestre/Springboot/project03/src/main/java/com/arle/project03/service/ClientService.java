package com.arle.project03.service;

import com.arle.project03.dto.ClientDTO.ClientRequestDTO;
import com.arle.project03.dto.ClientDTO.ClientResponseDTO;
import com.arle.project03.entity.Client;
import com.arle.project03.repository.ClientRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ClientService {
    private final ClientRepository clientRepository;

    public List<ClientResponseDTO> findAll() {
        return clientRepository.findAll().stream()
                .map(this::convertToDTO)
                .toList();
    }

    public ClientResponseDTO findById(Long id){
        return clientRepository.findById(id)
                .map(this::convertToDTO)
                .orElseThrow(() -> new RuntimeException("Client not found"));
    }

    public ClientResponseDTO save(ClientRequestDTO clientRequest){
        Client client = convertToEntity(clientRequest);
        clientRepository.save(client);
        return convertToDTO(client);
    }

    public ClientResponseDTO update(Long id, ClientRequestDTO clientRequest){
        Client client = clientRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Client not found"));
        client.setDocument(clientRequest.getDocument());
        client.setName(clientRequest.getName());
        clientRepository.save(client);
        return convertToDTO(client);
    }

    public void delete(Long id){
        if(clientRepository.findById(id).isPresent()){
            clientRepository.deleteById(id);
        }
    }





    private ClientResponseDTO convertToDTO (Client client){
        ClientResponseDTO clientResponseDTO = new ClientResponseDTO();
        clientResponseDTO.setId(client.getId());
        clientResponseDTO.setDocument(client.getDocument());
        clientResponseDTO.setName(client.getName());
        return clientResponseDTO;
    }

    private Client convertToEntity (ClientRequestDTO clientRequest){
        Client client = new Client();
        client.setDocument(clientRequest.getDocument());
        client.setName(clientRequest.getName());
        return client;
    }
}
