import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-inventaris-kantor',
  templateUrl: './inventaris-kantor.page.html',
  styleUrls: ['./inventaris-kantor.page.scss'],
})
export class InventarisKantorPage implements OnInit {
  dataInventarisKantor: any = [];
  id: number | null = null;
  nama: string = '';
  jumlah: string = '';
  modal_tambah: boolean = false;
  modal_edit: boolean = false;

  constructor(
    private _apiService: ApiService,
    private modal: ModalController
  ) {}

  ngOnInit() {
    this.getInventarisKantor();
  }

  getInventarisKantor() {
    this._apiService.tampil('tampil_data.php').subscribe({
      next: (res: any) => {
        console.log('sukses', res);
        this.dataInventarisKantor = res;
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }

  reset_model() {
    this.id = null;
    this.nama = '';
    this.jumlah = '';
  }

  cancel() {
    this.modal.dismiss();
    this.modal_tambah = false;
    this.reset_model();
  }

  open_modal_tambah(isOpen: boolean) {
    this.modal_tambah = isOpen;
    this.reset_model();
    this.modal_tambah = true;
    this.modal_edit = false;
  }

  open_modal_edit(isOpen: boolean, idget: any) {
    this.modal_edit = isOpen;
    this.id = idget;
    console.log(this.id);
    this.ambilInventarisKantor(this.id);
    this.modal_tambah = false;
    this.modal_edit = true;
  }

  tambahInventarisKantor() {
    if (this.nama != '' && this.jumlah != '') {
      let data = {
        nama: this.nama,
        jumlah: this.jumlah,
      };
      this._apiService.tambah(data, '/tambah_data.php').subscribe({
        next: (hasil: any) => {
          this.reset_model();
          console.log('berhasil tambah inventaris kantor');
          this.getInventarisKantor();
          this.modal_tambah = false;
          this.modal.dismiss();
        },
        error: (err: any) => {
          console.log('gagal tambah inventaris kantor');
        },
      });
    } else {
      console.log(
        'gagal tambah inventaris kantor karena masih ada data yg kosong'
      );
    }
  }

  hapusInventarisKantor(id: any) {
    this._apiService.hapus(id, '/hapus_data.php?id=').subscribe({
      next: (res: any) => {
        console.log('sukses', res);
        this.getInventarisKantor();
        console.log('berhasil hapus data');
      },
      error: (error: any) => {
        console.log('gagal');
      },
    });
  }

  ambilInventarisKantor(id: any) {
    this._apiService.lihat(id, '/lihat_data.php?id=').subscribe({
      next: (hasil: any) => {
        console.log('sukses', hasil);
        let inventaris_kantor = hasil;
        this.id = inventaris_kantor.id;
        this.nama = inventaris_kantor.nama;
        this.jumlah = inventaris_kantor.jumlah;
      },
      error: (error: any) => {
        console.log('gagal ambil data');
      },
    });
  }

  editInventarisKantor() {
    let data = {
      id: this.id,
      nama: this.nama,
      jumlah: this.jumlah,
    };
    this._apiService.edit(data, '/edit_data.php').subscribe({
      next: (hasil: any) => {
        console.log(hasil);
        this.reset_model();
        this.getInventarisKantor();
        console.log('berhasil edit inventaris kantor');
        this.modal_edit = false;
        this.modal.dismiss();
      },
      error: (err: any) => {
        console.log('gagal edit inventaris kantor');
      },
    });
  }
}
