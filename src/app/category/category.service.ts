import {Injectable} from '@angular/core';
import {Category} from "./category";
import {Observable} from "rxjs/internal/Observable";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Transaction} from '../transaction/transaction';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  RETRIEVE_CATEGORIES_URL = environment.apiUrl + "transactions/categories";
  ADD_CATEGORY_URL = environment.apiUrl + "transactions/categories";

  constructor(private http: HttpClient) {
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.RETRIEVE_CATEGORIES_URL)
  }

  getCategory(id: string): Observable<Transaction> {
    return this.http.get<Transaction>(this.RETRIEVE_CATEGORIES_URL+"/" + id);
  }

  addCategory(category: Category): Observable<Category> {
    return this.http.post<Category>(this.ADD_CATEGORY_URL, category)
  }

  deleteCategory(id: string) {
    return this.http.delete<void>(this.RETRIEVE_CATEGORIES_URL+"/" + id);
  }
}
