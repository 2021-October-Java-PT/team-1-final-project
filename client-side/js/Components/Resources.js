
export default function Resources(resources) {
    console.log(resources);
    return `
    <div class="row pg-cont" style="background-color: #d0cfce;">
        <div class="col-sm-4 pg-wrap">
            <div class="container-fluid">
                <h2>Filter Results By:</h2>
                <p>LOCATION:</p>
                <div class="map-cont map-responsive">
                <iframe src="https://www.google.com/maps/d/embed?mid=1LQJ-CngUrh5CpnqcsXtQep8G_U4EdjWy&ehbc=2E312F" width="100%" height="350"></iframe>
                </div>
                <br>
                <div class="search-form-cont" >
                <form>
                <div class="input-group">
                  <input type="search" id="search-bar" class="form-control" size="80" placeholder="Enter Your Zip Code, City, or County" required>
                  <div class="input-group-btn">
                    <button type="button" class="btn btn-danger" id="search-submit-btn">Submit</button>
                  </div>
                </div>
                </form>
                </div>
                <br>
                <p>RESOURCE:</p>
                <form>
                    <label class="checkbox-inline">
                        <input type="checkbox" id="filter-food-resources" class="filter-food-resources" value="food" name="filter-food-resources">Food
                    </label>
                    <label class="checkbox-inline">
                        <input type="checkbox" id="filter-care-resources" class="filter-care-resources" value="care" name="filter-care-resources">Care
                    </label>
                    <label class="checkbox-inline">
                        <input type="checkbox" id="filter-education-resources" class="filter-education-resources" value="" name="filter-education-resources">Education
                    </label><br>
                    <label class="checkbox-inline">
                        <input type="checkbox" id="filter-goods-resources" class="filter-goods-resources" value="" name="filter-goods-resources">Goods
                    </label>
                    <label class="checkbox-inline">
                        <input type="checkbox" id="filter-health-resources" class="filter-health-resources" value="" name="filter-health-resources">Health
                    </label>
                    <label class="checkbox-inline">
                        <input type="checkbox" id="filter-housing-resources" class="filter-housing-resources" value="" name="filter-housing-resources">Housing
                    </label><br>
                    <label class="checkbox-inline">
                        <input type="checkbox" id="filter-legal-resources" class="filter-legal-resources" value="" name="filter-legal-resources">Legal
                    </label>
                    <label class="checkbox-inline">
                        <input type="checkbox" id="filter-money-resources" class="filter-money-resources" value="" name="filter-money-resources">Money
                    </label>
                    <label class="checkbox-inline">
                        <input type="checkbox" id="filter-transit-resources" class="filter-transit-resources" value="" name="filter-transit-resources">Transit
                    </label><br>
                    <label class="checkbox-inline">
                        <input type="checkbox" id="filter-work-resources" class="filter-work-resources" value="" name="filter-work-resources">Work
                    </label><br>            
                </form>
            </div>
        </div>
        <div class="container-fluid col-sm-8" style="background-color: white;>
            ${resources.map(resource => {    
            return `
            <div class=" ${resource.services.map(services => { return `${services.service.toLocaleLowerCase()}-service `;}).join("")} panel panel-default">
            <div class="resource-box panel-heading" id="labels">
                
                    <span id="program-name-header">${resource.entityName}
                        <input type="hidden" id="programmingLanguageId" value="${resource.id}">
                    </span><br>
                    <span id="org-name-header">Provided By: ${resource.organizationName}</span>
            <div class="panel-body>    
                <div class="rsrc">
                    <div class="resource-summary">
                        <ul>
                            <li>${resource.description}</li><br><br>
                            <li>Serving: ${resource.serving}</li>
                            <li>Services: 
                                ${resource.services.map(services => {    
                                return `
                                ${services.service}
                                `;
                                }).join("")}
                            </li>
                        </ul>
                    </div>
                    <a href="#demo" class="btn btn-info" data-toggle="collapse">More Info</a>
  				        <div id="demo" class="collapse">
                          <div class="resource-hours-website">
                        <ul>
                            <li>Sunday: ${resource.sunHours}</li>
                            <li>Monday: ${resource.monHours}</li>
                            <li>Tuesday: ${resource.tuesHours}</li>
                            <li>Wednesday: ${resource.wedHours}</li>
                            <li>Thursday: ${resource.thursHours}</li>
                            <li>Friday: ${resource.friHours}</li>
                            <li>Saturday: ${resource.satHours}</li><br>
                            <li>Website: <a href="${resource.websiteUrl}" target="_blank">${resource.websiteUrl}</a></li>
                            <li>Language(s): ${resource.languages}</li>
                        </ul>
                    </div>
                    <div class="resource-address">
                        <ul>
                            <li>${resource.address.addressLine1} ${resource.address.addressLine2}</li>
                            <li>${resource.address.city.city}, ${resource.address.county.county}, ${resource.address.state} ${resource.address.zipCode.zipCode}</li>
                            <li>${resource.address.region.region} Ohio</li>
                        </ul>
                    </div>
                          </div>
                </div>
            </div>    
            </div>
        </div>
        `;
        }).join("")}
            
            </div>
        </div>
    </div>
    `;
}