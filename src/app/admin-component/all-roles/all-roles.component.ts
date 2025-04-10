import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-all-roles',
  templateUrl: './all-roles.component.html',
  styleUrls: ['./all-roles.component.scss'],
})
export class AllRolesComponent implements OnInit {
  constructor(
    private adminService: AdminService,
    private toastr: ToastrService
  ) {}

  roles: any;
  showAddRoleForm = false;
  newRoleName = '';

  role!: {
    id: string;
    name: string;
  };

  ngOnInit(): void {
    this.adminService.getAllRoles().subscribe((response) => {
      this.roles = response;
    });
  }

  addRole() {
    const newRole = {
      name: (this.newRoleName.startsWith('ROLE_')
        ? this.newRoleName
        : `ROLE_${this.newRoleName}`
      ).toUpperCase(),
    };

    //service call
    this.adminService.addRole(newRole).subscribe((response) => {
      if (response != null) {
        this.role = response;
        this.toastr.success(
          `Role Added: <br> ${this.role.id} <br> ${this.role.name}`
        );
      }
    });

    this.newRoleName = '';
    this.showAddRoleForm = false;
  }
}
