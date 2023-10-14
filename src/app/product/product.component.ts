import { ListService, PagedResultDto } from '@abp/ng.core';
import { Confirmation, ConfirmationService } from '@abp/ng.theme.shared';
import { query } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductDto, ProductService } from '@proxy/products';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  providers: [ListService],
})
export class ProductComponent implements OnInit {
  product =  { items: [], totalCount: 0 } as PagedResultDto<ProductDto>;
  isModalOpen = false;
  selectProduct = {} as ProductDto;

  form: FormGroup;

  constructor(public readonly list: ListService,private confirmation: ConfirmationService, private productService: ProductService,private fb: FormBuilder) {}



  ngOnInit(): void {
   const productStreamCreator = (query) => this.productService.getList(query);
   this.list.hookToQuery(productStreamCreator).subscribe((response)=>{
    this.product = response;
    
   });
  }



  createProduct() {
    this.selectProduct = {} as ProductDto;
    this.buildForm();
    this.isModalOpen = true;
  }

  editProduct(id: string) {
    debugger;
    this.productService.get(id).subscribe((product) => {
     this.selectProduct= product;
      this.buildForm();
      this.isModalOpen = true;
    });
  }

 delete(id:string){
  this.confirmation.warn('::AreYouSureToDelete','::AreYouSure').subscribe((status)=>{
    if(status == Confirmation.Status.confirm){
      this.productService.delete(id).subscribe(()=>this.list.get())
    }
  })
 }
  buildForm() {
    this.form = this.fb.group({
      name: [this.selectProduct.name ||'', Validators.required],
      description: [this.selectProduct.description || null, Validators.required],
     
      price: [this.selectProduct.price || null, Validators.required],
    });
  }

  
  save() {
    if (this.form.invalid) {
      return;
    }
const request = this.selectProduct.id ? this.productService.update(this.selectProduct.id,this.form.value):this.productService.create(this.form.value);
    request.subscribe(() => {
      this.isModalOpen = false;
      this.form.reset();
      this.list.get();
      this.isModalOpen = false;
    });
  }
}
