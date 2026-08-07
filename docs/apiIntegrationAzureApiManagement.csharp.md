# `apiIntegrationAzureApiManagement` Submodule <a name="`apiIntegrationAzureApiManagement` Submodule" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiIntegrationAzureApiManagement <a name="ApiIntegrationAzureApiManagement" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_azure_api_management snowflake_api_integration_azure_api_management}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new ApiIntegrationAzureApiManagement(Construct Scope, string Id, ApiIntegrationAzureApiManagementConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementConfig">ApiIntegrationAzureApiManagementConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementConfig">ApiIntegrationAzureApiManagementConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.resetApiBlockedPrefixes">ResetApiBlockedPrefixes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.resetApiKey">ResetApiKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.putTimeouts"></a>

```csharp
private void PutTimeouts(ApiIntegrationAzureApiManagementTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeouts">ApiIntegrationAzureApiManagementTimeouts</a>

---

##### `ResetApiBlockedPrefixes` <a name="ResetApiBlockedPrefixes" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.resetApiBlockedPrefixes"></a>

```csharp
private void ResetApiBlockedPrefixes()
```

##### `ResetApiKey` <a name="ResetApiKey" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.resetApiKey"></a>

```csharp
private void ResetApiKey()
```

##### `ResetComment` <a name="ResetComment" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.resetComment"></a>

```csharp
private void ResetComment()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ApiIntegrationAzureApiManagement resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

ApiIntegrationAzureApiManagement.IsConstruct(object X);
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

ApiIntegrationAzureApiManagement.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

ApiIntegrationAzureApiManagement.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

ApiIntegrationAzureApiManagement.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ApiIntegrationAzureApiManagement resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApiIntegrationAzureApiManagement to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApiIntegrationAzureApiManagement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_azure_api_management#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ApiIntegrationAzureApiManagement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.describeOutput">DescribeOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputList">ApiIntegrationAzureApiManagementDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.fullyQualifiedName">FullyQualifiedName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.showOutput">ShowOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputList">ApiIntegrationAzureApiManagementShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference">ApiIntegrationAzureApiManagementTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.apiAllowedPrefixesInput">ApiAllowedPrefixesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.apiBlockedPrefixesInput">ApiBlockedPrefixesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.apiKeyInput">ApiKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.azureAdApplicationIdInput">AzureAdApplicationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.azureTenantIdInput">AzureTenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.commentInput">CommentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeouts">ApiIntegrationAzureApiManagementTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.apiAllowedPrefixes">ApiAllowedPrefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.apiBlockedPrefixes">ApiBlockedPrefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.apiKey">ApiKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.azureAdApplicationId">AzureAdApplicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.azureTenantId">AzureTenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DescribeOutput`<sup>Required</sup> <a name="DescribeOutput" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.describeOutput"></a>

```csharp
public ApiIntegrationAzureApiManagementDescribeOutputList DescribeOutput { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputList">ApiIntegrationAzureApiManagementDescribeOutputList</a>

---

##### `FullyQualifiedName`<sup>Required</sup> <a name="FullyQualifiedName" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.fullyQualifiedName"></a>

```csharp
public string FullyQualifiedName { get; }
```

- *Type:* string

---

##### `ShowOutput`<sup>Required</sup> <a name="ShowOutput" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.showOutput"></a>

```csharp
public ApiIntegrationAzureApiManagementShowOutputList ShowOutput { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputList">ApiIntegrationAzureApiManagementShowOutputList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.timeouts"></a>

```csharp
public ApiIntegrationAzureApiManagementTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference">ApiIntegrationAzureApiManagementTimeoutsOutputReference</a>

---

##### `ApiAllowedPrefixesInput`<sup>Optional</sup> <a name="ApiAllowedPrefixesInput" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.apiAllowedPrefixesInput"></a>

```csharp
public string[] ApiAllowedPrefixesInput { get; }
```

- *Type:* string[]

---

##### `ApiBlockedPrefixesInput`<sup>Optional</sup> <a name="ApiBlockedPrefixesInput" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.apiBlockedPrefixesInput"></a>

```csharp
public string[] ApiBlockedPrefixesInput { get; }
```

- *Type:* string[]

---

##### `ApiKeyInput`<sup>Optional</sup> <a name="ApiKeyInput" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.apiKeyInput"></a>

```csharp
public string ApiKeyInput { get; }
```

- *Type:* string

---

##### `AzureAdApplicationIdInput`<sup>Optional</sup> <a name="AzureAdApplicationIdInput" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.azureAdApplicationIdInput"></a>

```csharp
public string AzureAdApplicationIdInput { get; }
```

- *Type:* string

---

##### `AzureTenantIdInput`<sup>Optional</sup> <a name="AzureTenantIdInput" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.azureTenantIdInput"></a>

```csharp
public string AzureTenantIdInput { get; }
```

- *Type:* string

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.commentInput"></a>

```csharp
public string CommentInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.timeoutsInput"></a>

```csharp
public IResolvable|ApiIntegrationAzureApiManagementTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeouts">ApiIntegrationAzureApiManagementTimeouts</a>

---

##### `ApiAllowedPrefixes`<sup>Required</sup> <a name="ApiAllowedPrefixes" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.apiAllowedPrefixes"></a>

```csharp
public string[] ApiAllowedPrefixes { get; }
```

- *Type:* string[]

---

##### `ApiBlockedPrefixes`<sup>Required</sup> <a name="ApiBlockedPrefixes" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.apiBlockedPrefixes"></a>

```csharp
public string[] ApiBlockedPrefixes { get; }
```

- *Type:* string[]

---

##### `ApiKey`<sup>Required</sup> <a name="ApiKey" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.apiKey"></a>

```csharp
public string ApiKey { get; }
```

- *Type:* string

---

##### `AzureAdApplicationId`<sup>Required</sup> <a name="AzureAdApplicationId" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.azureAdApplicationId"></a>

```csharp
public string AzureAdApplicationId { get; }
```

- *Type:* string

---

##### `AzureTenantId`<sup>Required</sup> <a name="AzureTenantId" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.azureTenantId"></a>

```csharp
public string AzureTenantId { get; }
```

- *Type:* string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApiIntegrationAzureApiManagementConfig <a name="ApiIntegrationAzureApiManagementConfig" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new ApiIntegrationAzureApiManagementConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string[] ApiAllowedPrefixes,
    string AzureAdApplicationId,
    string AzureTenantId,
    bool|IResolvable Enabled,
    string Name,
    string[] ApiBlockedPrefixes = null,
    string ApiKey = null,
    string Comment = null,
    string Id = null,
    ApiIntegrationAzureApiManagementTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementConfig.property.apiAllowedPrefixes">ApiAllowedPrefixes</a></code> | <code>string[]</code> | Explicitly limits external functions that use the integration to reference one or more HTTPS proxy service and remote service endpoints and resources. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementConfig.property.azureAdApplicationId">AzureAdApplicationId</a></code> | <code>string</code> | The 'Application (client) ID' of the Azure AD app for your Azure API Management instance. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementConfig.property.azureTenantId">AzureTenantId</a></code> | <code>string</code> | Specifies the ID for your Office 365 tenant that all Azure API Management instances belong to. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementConfig.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Specifies whether this API integration is enabled or disabled. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementConfig.property.name">Name</a></code> | <code>string</code> | Specifies the identifier (i.e. name) for the integration. This value must be unique in your account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `\|`, `.`, `"`. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementConfig.property.apiBlockedPrefixes">ApiBlockedPrefixes</a></code> | <code>string[]</code> | Lists the endpoints and resources in the HTTPS proxy service that are not allowed to be called from Snowflake. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementConfig.property.apiKey">ApiKey</a></code> | <code>string</code> | Specifies the API key (secret) that Snowflake uses to authenticate when making calls to the proxy service. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementConfig.property.comment">Comment</a></code> | <code>string</code> | Specifies a comment for the integration. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_azure_api_management#id ApiIntegrationAzureApiManagement#id}. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeouts">ApiIntegrationAzureApiManagementTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ApiAllowedPrefixes`<sup>Required</sup> <a name="ApiAllowedPrefixes" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementConfig.property.apiAllowedPrefixes"></a>

```csharp
public string[] ApiAllowedPrefixes { get; set; }
```

- *Type:* string[]

Explicitly limits external functions that use the integration to reference one or more HTTPS proxy service and remote service endpoints and resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_azure_api_management#api_allowed_prefixes ApiIntegrationAzureApiManagement#api_allowed_prefixes}

---

##### `AzureAdApplicationId`<sup>Required</sup> <a name="AzureAdApplicationId" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementConfig.property.azureAdApplicationId"></a>

```csharp
public string AzureAdApplicationId { get; set; }
```

- *Type:* string

The 'Application (client) ID' of the Azure AD app for your Azure API Management instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_azure_api_management#azure_ad_application_id ApiIntegrationAzureApiManagement#azure_ad_application_id}

---

##### `AzureTenantId`<sup>Required</sup> <a name="AzureTenantId" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementConfig.property.azureTenantId"></a>

```csharp
public string AzureTenantId { get; set; }
```

- *Type:* string

Specifies the ID for your Office 365 tenant that all Azure API Management instances belong to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_azure_api_management#azure_tenant_id ApiIntegrationAzureApiManagement#azure_tenant_id}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementConfig.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Specifies whether this API integration is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_azure_api_management#enabled ApiIntegrationAzureApiManagement#enabled}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Specifies the identifier (i.e. name) for the integration. This value must be unique in your account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_azure_api_management#name ApiIntegrationAzureApiManagement#name}

---

##### `ApiBlockedPrefixes`<sup>Optional</sup> <a name="ApiBlockedPrefixes" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementConfig.property.apiBlockedPrefixes"></a>

```csharp
public string[] ApiBlockedPrefixes { get; set; }
```

- *Type:* string[]

Lists the endpoints and resources in the HTTPS proxy service that are not allowed to be called from Snowflake.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_azure_api_management#api_blocked_prefixes ApiIntegrationAzureApiManagement#api_blocked_prefixes}

---

##### `ApiKey`<sup>Optional</sup> <a name="ApiKey" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementConfig.property.apiKey"></a>

```csharp
public string ApiKey { get; set; }
```

- *Type:* string

Specifies the API key (secret) that Snowflake uses to authenticate when making calls to the proxy service.

Snowflake returns a masked value for this field in DESCRIBE output, so external changes to it cannot be detected. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_azure_api_management#api_key ApiIntegrationAzureApiManagement#api_key}

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementConfig.property.comment"></a>

```csharp
public string Comment { get; set; }
```

- *Type:* string

Specifies a comment for the integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_azure_api_management#comment ApiIntegrationAzureApiManagement#comment}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_azure_api_management#id ApiIntegrationAzureApiManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementConfig.property.timeouts"></a>

```csharp
public ApiIntegrationAzureApiManagementTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeouts">ApiIntegrationAzureApiManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_azure_api_management#timeouts ApiIntegrationAzureApiManagement#timeouts}

---

### ApiIntegrationAzureApiManagementDescribeOutput <a name="ApiIntegrationAzureApiManagementDescribeOutput" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutput.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new ApiIntegrationAzureApiManagementDescribeOutput {

};
```


### ApiIntegrationAzureApiManagementShowOutput <a name="ApiIntegrationAzureApiManagementShowOutput" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutput.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new ApiIntegrationAzureApiManagementShowOutput {

};
```


### ApiIntegrationAzureApiManagementTimeouts <a name="ApiIntegrationAzureApiManagementTimeouts" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new ApiIntegrationAzureApiManagementTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_azure_api_management#create ApiIntegrationAzureApiManagement#create}. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_azure_api_management#delete ApiIntegrationAzureApiManagement#delete}. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_azure_api_management#read ApiIntegrationAzureApiManagement#read}. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_azure_api_management#update ApiIntegrationAzureApiManagement#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_azure_api_management#create ApiIntegrationAzureApiManagement#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_azure_api_management#delete ApiIntegrationAzureApiManagement#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_azure_api_management#read ApiIntegrationAzureApiManagement#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_azure_api_management#update ApiIntegrationAzureApiManagement#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApiIntegrationAzureApiManagementDescribeOutputList <a name="ApiIntegrationAzureApiManagementDescribeOutputList" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new ApiIntegrationAzureApiManagementDescribeOutputList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputList.get"></a>

```csharp
private ApiIntegrationAzureApiManagementDescribeOutputOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ApiIntegrationAzureApiManagementDescribeOutputOutputReference <a name="ApiIntegrationAzureApiManagementDescribeOutputOutputReference" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new ApiIntegrationAzureApiManagementDescribeOutputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.property.allowedPrefixes">AllowedPrefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.property.apiKey">ApiKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.property.apiProvider">ApiProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.property.azureAdApplicationId">AzureAdApplicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.property.azureConsentUrl">AzureConsentUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.property.azureMultiTenantAppName">AzureMultiTenantAppName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.property.azureTenantId">AzureTenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.property.blockedPrefixes">BlockedPrefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.property.enabled">Enabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutput">ApiIntegrationAzureApiManagementDescribeOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowedPrefixes`<sup>Required</sup> <a name="AllowedPrefixes" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.property.allowedPrefixes"></a>

```csharp
public string[] AllowedPrefixes { get; }
```

- *Type:* string[]

---

##### `ApiKey`<sup>Required</sup> <a name="ApiKey" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.property.apiKey"></a>

```csharp
public string ApiKey { get; }
```

- *Type:* string

---

##### `ApiProvider`<sup>Required</sup> <a name="ApiProvider" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.property.apiProvider"></a>

```csharp
public string ApiProvider { get; }
```

- *Type:* string

---

##### `AzureAdApplicationId`<sup>Required</sup> <a name="AzureAdApplicationId" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.property.azureAdApplicationId"></a>

```csharp
public string AzureAdApplicationId { get; }
```

- *Type:* string

---

##### `AzureConsentUrl`<sup>Required</sup> <a name="AzureConsentUrl" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.property.azureConsentUrl"></a>

```csharp
public string AzureConsentUrl { get; }
```

- *Type:* string

---

##### `AzureMultiTenantAppName`<sup>Required</sup> <a name="AzureMultiTenantAppName" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.property.azureMultiTenantAppName"></a>

```csharp
public string AzureMultiTenantAppName { get; }
```

- *Type:* string

---

##### `AzureTenantId`<sup>Required</sup> <a name="AzureTenantId" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.property.azureTenantId"></a>

```csharp
public string AzureTenantId { get; }
```

- *Type:* string

---

##### `BlockedPrefixes`<sup>Required</sup> <a name="BlockedPrefixes" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.property.blockedPrefixes"></a>

```csharp
public string[] BlockedPrefixes { get; }
```

- *Type:* string[]

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.property.enabled"></a>

```csharp
public IResolvable Enabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.property.internalValue"></a>

```csharp
public ApiIntegrationAzureApiManagementDescribeOutput InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutput">ApiIntegrationAzureApiManagementDescribeOutput</a>

---


### ApiIntegrationAzureApiManagementShowOutputList <a name="ApiIntegrationAzureApiManagementShowOutputList" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new ApiIntegrationAzureApiManagementShowOutputList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputList.get"></a>

```csharp
private ApiIntegrationAzureApiManagementShowOutputOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ApiIntegrationAzureApiManagementShowOutputOutputReference <a name="ApiIntegrationAzureApiManagementShowOutputOutputReference" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new ApiIntegrationAzureApiManagementShowOutputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.property.apiType">ApiType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.property.category">Category</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.property.createdOn">CreatedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.property.enabled">Enabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutput">ApiIntegrationAzureApiManagementShowOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApiType`<sup>Required</sup> <a name="ApiType" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.property.apiType"></a>

```csharp
public string ApiType { get; }
```

- *Type:* string

---

##### `Category`<sup>Required</sup> <a name="Category" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.property.category"></a>

```csharp
public string Category { get; }
```

- *Type:* string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.property.createdOn"></a>

```csharp
public string CreatedOn { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.property.enabled"></a>

```csharp
public IResolvable Enabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.property.internalValue"></a>

```csharp
public ApiIntegrationAzureApiManagementShowOutput InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutput">ApiIntegrationAzureApiManagementShowOutput</a>

---


### ApiIntegrationAzureApiManagementTimeoutsOutputReference <a name="ApiIntegrationAzureApiManagementTimeoutsOutputReference" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new ApiIntegrationAzureApiManagementTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeouts">ApiIntegrationAzureApiManagementTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ApiIntegrationAzureApiManagementTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeouts">ApiIntegrationAzureApiManagementTimeouts</a>

---



