<div class="modal fade" id="newPurchaseModal" tabindex="-1" data-bs-backdrop="static" data-bs-keyboard="false"
    role="dialog" aria-labelledby="modalTitleId" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="modalTitleId">
                    New Purchase
                </h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <form method="POST" action="{{ route('store-purchase') }}">
                @csrf

                <div class="modal-body">

                    <div class="row">
                        <div class="col">
                            <div class="mb-3">
                                <label for="purchase_date" class="form-label">Purchase Date</label>
                                <input type="text" class="form-control" name="purchase_date" id="purchase_date"
                                    value="{{ now()->format('Y-m-d') }}" />
                            </div>

                        </div>
                        <div class="col"></div>
                    </div>

                    <div class="mb-3">
                        <label for="grain_id" class="form-label">Grain Description</label>
                        <select class="form-select form-select-sm" name="grain_id" id="grain_id" required>
                            <option value="">---</option>
                            @foreach ($grains as $grain)
                            <option value="{{ $grain->id }}">{{ $grain->name }}</option>
                            @endforeach
                        </select>
                    </div>


                    <div class="row">
                        <div class="col">
                            <div class="mb-3">
                                <label for="per_per_sack" class="form-label">Price Per Bag</label>
                                <input type="number" class="form-control" name="price_per_sack" id="price_per_sack"
                                    placeholder="eg. 600" required />
                            </div>
                        </div>
                        <div class="col">
                            <div class="mb-3">
                                <label for="quantity" class="form-label">Quantity</label>
                                <input type="number" class="form-control" name="quantity" id="quantity"
                                    placeholder="eg. 10" required />
                            </div>
                        </div>
                        <div class="col">
                            <div class="mb-3">
                                <label for="total" class="form-label">Total</label>
                                <input type="hidden" class="form-control" name="total_cost" id="total_cost"
                                    aria-describedby="helpId" />
                                <div class="form-control text-right" id="total_cost_display">0.00</div>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col">
                            <div class="mb-3">
                                <label for="total" class="form-label">Tranportation Cost</label>
                                <input type="number" class="form-control" name="transportation_cost"
                                    id="transportation_cost" value="0" />
                            </div>
                        </div>
                        <div class="col">
                            <div class="mb-3">
                                <label for="loading_cost" class="form-label">Loading Cost</label>
                                <input type="number" class="form-control" name="loading_cost" id="loading_cost"
                                    value="0" />
                            </div>
                        </div>
                        <div class="col">
                            <div class="mb-3">
                                <label for="loading_cost" class="form-label">Total Purchase Cost</label>
                                <input type="hidden" class="form-control" name="total_purchase_cost"
                                    id="total_purchase_cost" value="0" />
                                <div class="form-control text-right" id="total_purchase_cost_display">0.00</div>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col">
                            <div class="mb-3">
                                <label for="warehouse_id" class="form-label">Warehouse</label>
                                <select class="form-select" name="warehouse_id" id="warehouse_id">
                                    <option value="">---</option>
                                    @foreach ($warehouses as $warehouse)
                                    <option value="{{ $warehouse->id }}">{{ $warehouse->description }}</option>
                                    @endforeach
                                </select>
                            </div>

                        </div>
                        <div class="col">
                            <div class="mb-3">
                                <label for="purchased_by" class="form-label">Purchased By</label>
                                <input type="text" class="form-control" name="purchased_by" id="purchased_by"
                                    placeholder="eg. John Doe" required />
                            </div>

                        </div>
                    </div>

                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                        Close
                    </button>
                    <button type="submit" class="btn btn-primary">
                        <i class="fas fa-check me-3  "></i> Record Purchase
                    </button>
                </div>
                </form>
        </div>
    </div>
</div>
