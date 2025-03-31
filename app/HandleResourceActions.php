<?php

namespace App;

trait HandleResourceActions
{
    protected function modelName(): string
    {
        return $this->modelName ?? 'Resource';
    }


    public function handleStore($data)
    {
        try {
            if (!$this->model::create($data->validated())) {
                return $this->handleError('Unable to create ' . $this->modelName);
            }

            return $this->handleSuccess('Bingo! '. $this->modelName . ' created successfully');
        } catch (\Exception $e) {
            return $this->handleError('Error creating ' . $this->modelName . ': ' . $e->getMessage());
        }
    }


    public function handleUpdate($request, $model)
    {
        try {
            if (!$model->update($request->validated())) {
                return $this->handleError('Unable to update ' . $this->modelName());
            }

            return $this->handleSuccess('Bingo ' .$this->modelName() . ' updated successfully');
        } catch (\Exception $e) {
            return $this->handleError('Error updating ' . $this->modelName() . ': ' . $e->getMessage());
        }
    }


    public function handleDelete($model)
    {
        try{
            if (!$model->delete()) {
                return $this->handleError('Unable to delete ' . $this->modelName);
            }

            return $this->handleSuccess('Bingo! '. $this->modelName . ' deleted successfully');
        } catch (\Exception $e) {
            return $this->handleError('Error deleting ' . $this->modelName . ': ' . $e->getMessage());
        }
    }


    private function handleError($message)
    {
        return redirect()->back()->with('error', $message);
    }

    private function handleSuccess($message)
    {
        return redirect()->back()->with('success', $message);
    }
}
