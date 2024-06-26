import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { BrandsService } from './brands.service';
import { GetBrandsFilterDto } from './dto/get-brands-filter.dto';
import { Brand } from './orm/brand.entity';
import { CreateBrandDto } from './dto/create-brand.dto';

@Controller('brands')
export class BrandsController {
  constructor(private brandsService: BrandsService) {}

  @Get()
  getBrands(
    @Query(ValidationPipe) getBrandsFilterDto: GetBrandsFilterDto,
  ): Promise<Brand[]> {
    return this.brandsService.getBrands(getBrandsFilterDto);
  }

  @Get('/:slug')
  getBrandBySlug(@Param('slug') slug: string): Promise<Brand> {
    return this.brandsService.getBrandBySlug(slug);
  }

  @Post()
  createBrand(
    @Body(ValidationPipe) createBrandDto: CreateBrandDto,
  ): Promise<Brand> {
    return this.brandsService.createBrand(createBrandDto);
  }
}
