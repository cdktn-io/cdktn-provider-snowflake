# `apiIntegrationGoogleCloudApiGateway` Submodule <a name="`apiIntegrationGoogleCloudApiGateway` Submodule" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiIntegrationGoogleCloudApiGateway <a name="ApiIntegrationGoogleCloudApiGateway" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_google_cloud_api_gateway snowflake_api_integration_google_cloud_api_gateway}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new ApiIntegrationGoogleCloudApiGateway(Construct Scope, string Id, ApiIntegrationGoogleCloudApiGatewayConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig">ApiIntegrationGoogleCloudApiGatewayConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig">ApiIntegrationGoogleCloudApiGatewayConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.resetApiBlockedPrefixes">ResetApiBlockedPrefixes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.putTimeouts"></a>

```csharp
private void PutTimeouts(ApiIntegrationGoogleCloudApiGatewayTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeouts">ApiIntegrationGoogleCloudApiGatewayTimeouts</a>

---

##### `ResetApiBlockedPrefixes` <a name="ResetApiBlockedPrefixes" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.resetApiBlockedPrefixes"></a>

```csharp
private void ResetApiBlockedPrefixes()
```

##### `ResetComment` <a name="ResetComment" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.resetComment"></a>

```csharp
private void ResetComment()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ApiIntegrationGoogleCloudApiGateway resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

ApiIntegrationGoogleCloudApiGateway.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

ApiIntegrationGoogleCloudApiGateway.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

ApiIntegrationGoogleCloudApiGateway.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

ApiIntegrationGoogleCloudApiGateway.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ApiIntegrationGoogleCloudApiGateway resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApiIntegrationGoogleCloudApiGateway to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApiIntegrationGoogleCloudApiGateway that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_google_cloud_api_gateway#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ApiIntegrationGoogleCloudApiGateway to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.describeOutput">DescribeOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputList">ApiIntegrationGoogleCloudApiGatewayDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.fullyQualifiedName">FullyQualifiedName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.showOutput">ShowOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputList">ApiIntegrationGoogleCloudApiGatewayShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference">ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.apiAllowedPrefixesInput">ApiAllowedPrefixesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.apiBlockedPrefixesInput">ApiBlockedPrefixesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.commentInput">CommentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.googleAudienceInput">GoogleAudienceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeouts">ApiIntegrationGoogleCloudApiGatewayTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.apiAllowedPrefixes">ApiAllowedPrefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.apiBlockedPrefixes">ApiBlockedPrefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.googleAudience">GoogleAudience</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DescribeOutput`<sup>Required</sup> <a name="DescribeOutput" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.describeOutput"></a>

```csharp
public ApiIntegrationGoogleCloudApiGatewayDescribeOutputList DescribeOutput { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputList">ApiIntegrationGoogleCloudApiGatewayDescribeOutputList</a>

---

##### `FullyQualifiedName`<sup>Required</sup> <a name="FullyQualifiedName" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.fullyQualifiedName"></a>

```csharp
public string FullyQualifiedName { get; }
```

- *Type:* string

---

##### `ShowOutput`<sup>Required</sup> <a name="ShowOutput" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.showOutput"></a>

```csharp
public ApiIntegrationGoogleCloudApiGatewayShowOutputList ShowOutput { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputList">ApiIntegrationGoogleCloudApiGatewayShowOutputList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.timeouts"></a>

```csharp
public ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference">ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference</a>

---

##### `ApiAllowedPrefixesInput`<sup>Optional</sup> <a name="ApiAllowedPrefixesInput" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.apiAllowedPrefixesInput"></a>

```csharp
public string[] ApiAllowedPrefixesInput { get; }
```

- *Type:* string[]

---

##### `ApiBlockedPrefixesInput`<sup>Optional</sup> <a name="ApiBlockedPrefixesInput" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.apiBlockedPrefixesInput"></a>

```csharp
public string[] ApiBlockedPrefixesInput { get; }
```

- *Type:* string[]

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.commentInput"></a>

```csharp
public string CommentInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `GoogleAudienceInput`<sup>Optional</sup> <a name="GoogleAudienceInput" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.googleAudienceInput"></a>

```csharp
public string GoogleAudienceInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.timeoutsInput"></a>

```csharp
public IResolvable|ApiIntegrationGoogleCloudApiGatewayTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeouts">ApiIntegrationGoogleCloudApiGatewayTimeouts</a>

---

##### `ApiAllowedPrefixes`<sup>Required</sup> <a name="ApiAllowedPrefixes" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.apiAllowedPrefixes"></a>

```csharp
public string[] ApiAllowedPrefixes { get; }
```

- *Type:* string[]

---

##### `ApiBlockedPrefixes`<sup>Required</sup> <a name="ApiBlockedPrefixes" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.apiBlockedPrefixes"></a>

```csharp
public string[] ApiBlockedPrefixes { get; }
```

- *Type:* string[]

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `GoogleAudience`<sup>Required</sup> <a name="GoogleAudience" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.googleAudience"></a>

```csharp
public string GoogleAudience { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApiIntegrationGoogleCloudApiGatewayConfig <a name="ApiIntegrationGoogleCloudApiGatewayConfig" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new ApiIntegrationGoogleCloudApiGatewayConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string[] ApiAllowedPrefixes,
    bool|IResolvable Enabled,
    string GoogleAudience,
    string Name,
    string[] ApiBlockedPrefixes = null,
    string Comment = null,
    string Id = null,
    ApiIntegrationGoogleCloudApiGatewayTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig.property.apiAllowedPrefixes">ApiAllowedPrefixes</a></code> | <code>string[]</code> | Explicitly limits external functions that use the integration to reference one or more HTTPS proxy service and remote service endpoints and resources. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Specifies whether this API integration is enabled or disabled. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig.property.googleAudience">GoogleAudience</a></code> | <code>string</code> | Specifies the audience claim used by Snowflake when generating the JWT to authenticate with the Google Cloud API Gateway. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig.property.name">Name</a></code> | <code>string</code> | Specifies the identifier (i.e. name) for the integration. This value must be unique in your account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `\|`, `.`, `"`. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig.property.apiBlockedPrefixes">ApiBlockedPrefixes</a></code> | <code>string[]</code> | Lists the endpoints and resources in the HTTPS proxy service that are not allowed to be called from Snowflake. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig.property.comment">Comment</a></code> | <code>string</code> | Specifies a comment for the integration. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_google_cloud_api_gateway#id ApiIntegrationGoogleCloudApiGateway#id}. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeouts">ApiIntegrationGoogleCloudApiGatewayTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ApiAllowedPrefixes`<sup>Required</sup> <a name="ApiAllowedPrefixes" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig.property.apiAllowedPrefixes"></a>

```csharp
public string[] ApiAllowedPrefixes { get; set; }
```

- *Type:* string[]

Explicitly limits external functions that use the integration to reference one or more HTTPS proxy service and remote service endpoints and resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_google_cloud_api_gateway#api_allowed_prefixes ApiIntegrationGoogleCloudApiGateway#api_allowed_prefixes}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Specifies whether this API integration is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_google_cloud_api_gateway#enabled ApiIntegrationGoogleCloudApiGateway#enabled}

---

##### `GoogleAudience`<sup>Required</sup> <a name="GoogleAudience" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig.property.googleAudience"></a>

```csharp
public string GoogleAudience { get; set; }
```

- *Type:* string

Specifies the audience claim used by Snowflake when generating the JWT to authenticate with the Google Cloud API Gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_google_cloud_api_gateway#google_audience ApiIntegrationGoogleCloudApiGateway#google_audience}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Specifies the identifier (i.e. name) for the integration. This value must be unique in your account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_google_cloud_api_gateway#name ApiIntegrationGoogleCloudApiGateway#name}

---

##### `ApiBlockedPrefixes`<sup>Optional</sup> <a name="ApiBlockedPrefixes" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig.property.apiBlockedPrefixes"></a>

```csharp
public string[] ApiBlockedPrefixes { get; set; }
```

- *Type:* string[]

Lists the endpoints and resources in the HTTPS proxy service that are not allowed to be called from Snowflake.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_google_cloud_api_gateway#api_blocked_prefixes ApiIntegrationGoogleCloudApiGateway#api_blocked_prefixes}

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig.property.comment"></a>

```csharp
public string Comment { get; set; }
```

- *Type:* string

Specifies a comment for the integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_google_cloud_api_gateway#comment ApiIntegrationGoogleCloudApiGateway#comment}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_google_cloud_api_gateway#id ApiIntegrationGoogleCloudApiGateway#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig.property.timeouts"></a>

```csharp
public ApiIntegrationGoogleCloudApiGatewayTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeouts">ApiIntegrationGoogleCloudApiGatewayTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_google_cloud_api_gateway#timeouts ApiIntegrationGoogleCloudApiGateway#timeouts}

---

### ApiIntegrationGoogleCloudApiGatewayDescribeOutput <a name="ApiIntegrationGoogleCloudApiGatewayDescribeOutput" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutput.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new ApiIntegrationGoogleCloudApiGatewayDescribeOutput {

};
```


### ApiIntegrationGoogleCloudApiGatewayShowOutput <a name="ApiIntegrationGoogleCloudApiGatewayShowOutput" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutput.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new ApiIntegrationGoogleCloudApiGatewayShowOutput {

};
```


### ApiIntegrationGoogleCloudApiGatewayTimeouts <a name="ApiIntegrationGoogleCloudApiGatewayTimeouts" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new ApiIntegrationGoogleCloudApiGatewayTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_google_cloud_api_gateway#create ApiIntegrationGoogleCloudApiGateway#create}. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_google_cloud_api_gateway#delete ApiIntegrationGoogleCloudApiGateway#delete}. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_google_cloud_api_gateway#read ApiIntegrationGoogleCloudApiGateway#read}. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_google_cloud_api_gateway#update ApiIntegrationGoogleCloudApiGateway#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_google_cloud_api_gateway#create ApiIntegrationGoogleCloudApiGateway#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_google_cloud_api_gateway#delete ApiIntegrationGoogleCloudApiGateway#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_google_cloud_api_gateway#read ApiIntegrationGoogleCloudApiGateway#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_google_cloud_api_gateway#update ApiIntegrationGoogleCloudApiGateway#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApiIntegrationGoogleCloudApiGatewayDescribeOutputList <a name="ApiIntegrationGoogleCloudApiGatewayDescribeOutputList" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new ApiIntegrationGoogleCloudApiGatewayDescribeOutputList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputList.get"></a>

```csharp
private ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference <a name="ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.property.allowedPrefixes">AllowedPrefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.property.apiKey">ApiKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.property.apiProvider">ApiProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.property.blockedPrefixes">BlockedPrefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.property.enabled">Enabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.property.googleApiServiceAccount">GoogleApiServiceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.property.googleAudience">GoogleAudience</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutput">ApiIntegrationGoogleCloudApiGatewayDescribeOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowedPrefixes`<sup>Required</sup> <a name="AllowedPrefixes" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.property.allowedPrefixes"></a>

```csharp
public string[] AllowedPrefixes { get; }
```

- *Type:* string[]

---

##### `ApiKey`<sup>Required</sup> <a name="ApiKey" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.property.apiKey"></a>

```csharp
public string ApiKey { get; }
```

- *Type:* string

---

##### `ApiProvider`<sup>Required</sup> <a name="ApiProvider" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.property.apiProvider"></a>

```csharp
public string ApiProvider { get; }
```

- *Type:* string

---

##### `BlockedPrefixes`<sup>Required</sup> <a name="BlockedPrefixes" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.property.blockedPrefixes"></a>

```csharp
public string[] BlockedPrefixes { get; }
```

- *Type:* string[]

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.property.enabled"></a>

```csharp
public IResolvable Enabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `GoogleApiServiceAccount`<sup>Required</sup> <a name="GoogleApiServiceAccount" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.property.googleApiServiceAccount"></a>

```csharp
public string GoogleApiServiceAccount { get; }
```

- *Type:* string

---

##### `GoogleAudience`<sup>Required</sup> <a name="GoogleAudience" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.property.googleAudience"></a>

```csharp
public string GoogleAudience { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.property.internalValue"></a>

```csharp
public ApiIntegrationGoogleCloudApiGatewayDescribeOutput InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutput">ApiIntegrationGoogleCloudApiGatewayDescribeOutput</a>

---


### ApiIntegrationGoogleCloudApiGatewayShowOutputList <a name="ApiIntegrationGoogleCloudApiGatewayShowOutputList" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new ApiIntegrationGoogleCloudApiGatewayShowOutputList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputList.get"></a>

```csharp
private ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference <a name="ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.property.apiType">ApiType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.property.category">Category</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.property.createdOn">CreatedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.property.enabled">Enabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutput">ApiIntegrationGoogleCloudApiGatewayShowOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApiType`<sup>Required</sup> <a name="ApiType" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.property.apiType"></a>

```csharp
public string ApiType { get; }
```

- *Type:* string

---

##### `Category`<sup>Required</sup> <a name="Category" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.property.category"></a>

```csharp
public string Category { get; }
```

- *Type:* string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.property.createdOn"></a>

```csharp
public string CreatedOn { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.property.enabled"></a>

```csharp
public IResolvable Enabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.property.internalValue"></a>

```csharp
public ApiIntegrationGoogleCloudApiGatewayShowOutput InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutput">ApiIntegrationGoogleCloudApiGatewayShowOutput</a>

---


### ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference <a name="ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeouts">ApiIntegrationGoogleCloudApiGatewayTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ApiIntegrationGoogleCloudApiGatewayTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeouts">ApiIntegrationGoogleCloudApiGatewayTimeouts</a>

---



