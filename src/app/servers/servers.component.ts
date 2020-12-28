import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServersService } from './servers.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  public servers: {id: number, name: string, status: string}[] = [];

  constructor(
    private serversService: ServersService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

  onReload() {
    /* Diferentemente do routerLink o router.navigate não sabe em qual rota estamos atualmente.
    Por isso se usarmos o caminho relativo que é servers, não temos um erro.
    Com o relativeTo, podemos dizer ao navigate qual é a rota ativa, com ele passa a ser servers.
    Assim temos novamente o erro pois tenta acessar servers/servers*/
    //this.router.navigate(['servers'], {relativeTo: this.route});
  }

}
