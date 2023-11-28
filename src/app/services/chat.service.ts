import { Injectable } from '@angular/core';
import { Stomp } from '@stomp/stompjs';
import * as SockJS from 'sockjs-client';
import { ChatMessage } from '../models/chat-message';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private stompClient: any
  private messageSubject: BehaviorSubject<ChatMessage[]> = new BehaviorSubject<ChatMessage[]>([]) //esto es un listener


  constructor() { 
    this.initConnenctionSocket(); //Aqui le estoy diciendo q inicie la conexion con mi back
  }

  initConnenctionSocket(){
    const url = 'http://localhost:8080/chat-socket'
    const socket = new SockJS(url);
    this.stompClient = Stomp.over(socket)
  }


  joinRoom(roomId: string){ //se supone q con esto ya se unio el cliente a la sala :v
    this.stompClient.connect({}, () =>{
      this.stompClient.subscribe(`/topic/${roomId}`, (messages: any) =>{
        const messageContent= JSON.parse(messages.body);
        const currentMessage = this.messageSubject.getValue();
        currentMessage.push(messageContent);

        this.messageSubject.next(currentMessage); //con esto le envio los mensajes al listener
      })
    })
  }

  sendMessage(roomId: string, chatMessage: ChatMessage){
    this.stompClient.send(`/app/chat/${roomId}`, 
      {}, JSON.stringify(chatMessage)) //las llaves indica el contenido del mensaje, y en el .JSON le indico q me lo pase a string(y no lo mande como interfaz q es como esta definido)
  }

  getMessageSubject(){
    return this.messageSubject.asObservable();
  }

}
