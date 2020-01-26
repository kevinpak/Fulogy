import React from 'react';
import './constructor.css';

const Constructor = () =>{

	


	return (
<div className="constructor">
	<div className="container">

		<div className="cols constructor-content row-between">
			<div className="col constructor-content-slider">
				<div className="constructor-content-slider-body">
					<img src="./assets/images/image.jpg"/>
				</div>
			</div>
			<div className="col constructor-content-infos">
				<div className="constructor-content-infos-body">
					<div className="col">
						<table className="table">
							<tr>
								<td>Класс</td>
								<td><span className="link__btn">standart</span></td>
							</tr>
							<tr>
								<td>Потребпяемая мощность</td>
								<td>59 вт.</td>
							</tr>
							<tr>
								<td>Сила света</td>
								<td>3459 Люмен = 7,5 Ламп Накаливания по 40 вт.</td>
							</tr>
							<tr>
								<td>Гарантия</td>
								<td>3 Года</td>
							</tr>
							<tr>
								<td>Монтаж</td>
								<td>Да</td>
							</tr>
							<tr>
								<td>Итого сумма</td>
								<td>2594 Рублей</td>
							</tr>
						</table>
					</div>
					<div className="ribbon">
						<a href="#" className="ribbon-info">i</a>
						<a href="#" className="ribbon-choose">Выберите цвет свечения</a>
					</div>
					<ul className="slider__nav">
					<li>
						<a href="#">
							<img src="./assets/images/img.jpg"/>
							<span>Теплый</span>
						</a>
					</li>
					<li>
						<a href="#">
							<img src="./assets/images/img.jpg"/>
							<span>Дневной</span>
						</a>
					</li>
					<li>
						<a href="#">
							<img src="./assets/images/img.jpg"/>
							<span>Холодный</span>
						</a>
					</li>
					</ul>
				</div>
				
			</div>
		</div>
	</div>

	<nav className="constructor-nav">
		<div className="container">
			<div className="col">
				<ul className="constructor-nav-list">
					<li><a href="#" className="bb-blue">Вариант кухни</a></li>
					<li><a href="#" className="bb-blue">Зазмеры</a></li>
					<li><a href="#" className="bb-blue">Сенсор</a></li>
					<li><a href="#" className="bb-blue">Питающий кабель</a></li>
					<li><a href="#" className="bb-blue">Блок питания</a></li>
					<li><a href="#" className="bb-blue active">Цвет свечения</a></li>
					<li><a href="#" className="bb-red">Монтаж</a></li>
					<li><a href="#" className="bb-red">Корзина</a></li>
				</ul>
				<div className="constructor-nav-mobile for__mobile">
					<div className="constructor-nav-mobile-title">
						Выберите цвет свечения
					</div>
					<ul className="constructor-nav-mobile-nav">
						<li className="constructor-nav-mobile-nav-btn prev">
							<a href="#" className="icon-left-open"></a>
						</li>
						<li className="constructor-nav-mobile-nav-content">
							<a href="#" className="icon-menu"> Цвет свечения</a>
						</li>
						<li className="constructor-nav-mobile-nav-btn next">
							<a href="#" className="icon-right-open"></a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</nav>

</div>
		)
}


export default Constructor;